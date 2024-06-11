import { makeAutoObservable, observable, runInAction } from "mobx";
import { Product } from "../interfaces/productInterface";

class ProductStore {
    products :Product[] = observable([
        {id: 1 , name: 'Product 1', price: 50},
        {id: 2 , name: 'Product 2', price: 30},
        {id: 3 , name: 'Product 3', price: 130},
        {id: 4 , name: 'Product 4', price: 340},
        {id: 5 , name: 'Product 5', price: 36},
        {id: 6 , name: 'Product 6', price: 90}
    ]);
    setProducts(products: Product[]): void {
        runInAction(() => {
            this.products = products;
        });
    }
}

export const productStore = new ProductStore();
