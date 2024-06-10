import React from "react"
import { observer } from "mobx-react-lite";
import { cartStore } from "../stores/CartStore";


const ShoppingCart: React.FC = observer(() => {
    return (
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartStore.items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => cartStore.removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <div>Total Items: {cartStore.totalItems}</div>
        <div>Total Price: ${cartStore.totalPrice.toFixed(2)}</div>
      </div>
    );
  });
  
  export default ShoppingCart;