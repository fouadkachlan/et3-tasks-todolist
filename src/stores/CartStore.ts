import { makeAutoObservable, observable, runInAction } from "mobx";
import memoize  from "lodash.memoize";
import { Product } from "../interfaces/ProductAndCartItemInterface";
import { CartItem } from "../interfaces/ProductAndCartItemInterface";
class CartStore {
    totalItems = observable.box(0);
    items = observable.array<CartItem>([]);

    constructor() {
        makeAutoObservable(this);
        this.getTotalItems = memoize(this.getTotalItems);
        //this.totalPrice = memoize(this.totalPrice);
    }

    setItems(items: CartItem[]) : void
    {
        runInAction(() =>{
            this.items.replace(items);
        })
    }
    addItem(product: Product): void {
        const existingItem = this.items.find(item => item.id === product.id);
        let updatedItems;
        if (existingItem) {
            updatedItems = this.items.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedItems = [...this.items, { ...product, quantity: 1 }];
        }
        this.setItems(updatedItems);
        console.log("Items after adding:", this.items);
        this.updateTotalItems();
    }

    removeItem(productId: number): void {
        const itemIndex = this.items.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            let updatedItems;
            const currentItem = this.items[itemIndex];
            if (currentItem.quantity > 1) {
                updatedItems = this.items.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                updatedItems = this.items.filter(item => item.id !== productId);
            }
            this.setItems(updatedItems);
            console.log("Items after removing:", this.items);
            this.updateTotalItems();
        }
    }

    updateTotalItems(): void {
        const newTotalItems = this.getTotalItems();
        console.log("Updating total items to:", newTotalItems);
        this.totalItems.set(newTotalItems);
    }

    getTotalItems(): number {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    get totalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    get renderedItems() {
        return this.items.map(item => ({
            ...item,
            removeItem: () => this.removeItem(item.id)
        }));
    }
}

export const cartStore = new CartStore();
