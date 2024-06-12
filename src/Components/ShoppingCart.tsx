import React from "react"
import { observer } from "mobx-react-lite";
import { cartStore } from "../stores/CartStore";
import CustomDiv from "./CustomDiv";
import CustomText from "./CustomText";


const ShoppingCart: React.FC = observer(() => {
    return (
      <CustomDiv alignItems= "center" justifyContent="space-between" display="block"  width="" height=""
       style={{ 
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px"
        }}>
        <CustomText fontSize="45pt" fontWeight="500" style={{color: "red"}}
        >Shopping Cart</CustomText>
        <ul style={{ listStyle: "none", padding: "0" }}>
        {cartStore.renderedItems.map(renderedItem => (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #eee"
            }}
            key={renderedItem.id}
          >
            {renderedItem.name} - ${renderedItem.price} x {renderedItem.quantity}
            <button
              style={{
                padding: "8px 12px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
              onClick={renderedItem.removeItem}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
       
        <CustomDiv  alignItems= "center" justifyContent="space-between" 
        display="block"  width=""
         height=""style={{fontSize: "1.2em",fontWeight: "bold"}}
        >Total Items: {cartStore.getTotalItems()}</CustomDiv>


        <CustomDiv  alignItems= "center" justifyContent="space-between" display="block"  width="" height=""
        style={{textAlign: "right",marginTop: "20px"}}
        >Total Price: ${cartStore.totalPrice.toFixed(2)}</CustomDiv>
      </CustomDiv>
    );
  });
  
  export default ShoppingCart;
