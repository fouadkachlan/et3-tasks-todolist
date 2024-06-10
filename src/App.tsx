import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import UserInfo from './Components/UserInfo';
import './App.css';


const App : React.FC = () => {
  return (
      <div>
        <h1>Online Shopping Cart</h1>
        <UserInfo />
        <ProductList />
        <ShoppingCart />
      </div>
  );
}


export default App;
