import { makeAutoObservable } from "mobx";

interface Product
{
    id: number;
    name: string;
    price: number;
}

class ProductStore
{
    products: Product[] = [
        {id: 1 , name: 'Product 1', price: 50},
        {id: 2 , name: 'Product 2', price: 30},
        {id: 3 , name: 'Product 3', price: 130},
        {id: 4 , name: 'Product 4', price: 340},
        {id: 5 , name: 'Product 5', price: 36},
        {id: 6 , name: 'Product 6', price: 90}
    ];
    constructor()
    {
        makeAutoObservable(this)
    }
}

export const productStore = new ProductStore();