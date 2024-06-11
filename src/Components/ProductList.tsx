import React from "react";
import { observer } from "mobx-react-lite";
import { productStore } from "../stores/ProductStore";
import { cartStore } from "../stores/CartStore";
import CustomDiv from "./CustomDiv";

const ProductList: React.FC = observer(() => {
    return (
      <CustomDiv style={{background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        padding: "10px 0",
        borderBottom: "1px solid #eee"}}
         alignItems= "center" justifyContent="space-between" display="flex"  width="" height="">
        <h2>Products</h2>
        <ul style={{
          listStyle: "none",
          padding: "0"
        }}>
          {productStore.products.map(product => (
            <li style={{borderBottom:"none"}} key={product.id}>
              {product.name} - ${product.price}
              <button style={{
                display:"flex",
                padding: "8px 12px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }} onClick={() => cartStore.addItem(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </CustomDiv>
    );
  });
  
export default ProductList;
