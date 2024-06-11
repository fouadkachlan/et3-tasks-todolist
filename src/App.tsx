import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import UserInfo from './Components/UserInfo';
import CustomDiv from './Components/CustomDiv';



const App : React.FC = () => {
  return (
      <CustomDiv alignItems= "center" justifyContent="space-between" display="block"  width="" height=""
       style={{
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding:"0",
        boxSizing: "border-box",
        backgroundColor: "#f7f7f7"}}>
        <h1 style={{color: "#333"}}>Online Shopping Cart</h1>
        <UserInfo />
        <ProductList />
        <ShoppingCart />
      </CustomDiv>
  );
}


export default App;
