import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import UserInfo from './Components/UserInfo';
import CustomDiv from './Components/CustomDiv';
import CustomText from './Components/CustomText'
import './App.css';



const App : React.FC = () => {
  return (
      <CustomDiv alignItems= "center" justifyContent="space-between" display="block"  width="" height=""
       style={{
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding:"0",
        boxSizing: "border-box",
        backgroundColor: "#f7f7f7"}}>
        <CustomText fontSize='35pt' fontWeight=''
         style={{color: "#333"}}>Online Shopping Cart</CustomText>
        <UserInfo />
        <ProductList />
        <ShoppingCart />
      </CustomDiv>
  );
}


export default App;
