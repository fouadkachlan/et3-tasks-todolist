import { makeAutoObservable } from "mobx"

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
        }
    }
    get totalItems(): number {
        return this.items.reduce((total, item) => total + item.quantity, 0);
      }
    
      get totalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    }
    


export const cartStore = new CartStore();