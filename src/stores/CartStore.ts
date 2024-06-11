import { makeAutoObservable, observable } from "mobx";
import memoize  from "lodash.memoize";
interface Product 
{
    id: number;
    name: string;
    price: number;
}
interface CartItem extends Product
{
    quantity: number;
}
class CartStore
{
    totalitems= observable.box(0);
    items: CartItem[] = [];
    constructor()
    {
        makeAutoObservable(this);
    }
    addItem(product:Product) : void
    {
        const existingItem = this.items.find(item => item.id === product.id)
        if (existingItem)
        {
            existingItem.quantity++;
        }else{
            this.items.push({...product, quantity:1});
        }
        console.log("Items after adding:", this.items);
        this.updateTotalItems();
    }
    removeItem(productId:number): void
    {
        const itemIndex = this.items.findIndex(item => item.id === productId);
        if (itemIndex > -1)
        {
            if (this.items[itemIndex].quantity > 1)
            {
                this.items[itemIndex].quantity--;
            }else{
                this.items.splice(itemIndex,1);
            }
            console.log("Items after removing:", this.items);
            this.updateTotalItems();
        }
    }
    updateTotalItems(): void {
        const newTotalItems = this.getTotalItems();
        console.log("Updating total items to:", newTotalItems);
        this.totalitems.set(newTotalItems);
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
