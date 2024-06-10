import React from "react";
import { observer } from "mobx-react-lite";
import { productStore } from "../stores/ProductStore";
import { cartStore } from "../stores/CartStore"

const ProductList: React.FC = observer(() => {
    return (
      <div className= "product-list">
        <h2>Products</h2>
        <ul>
          {productStore.products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => cartStore.addItem(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  });
  
export default ProductList;