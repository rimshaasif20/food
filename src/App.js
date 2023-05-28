import React, {Fragment , useState} from 'react'
import './App.css'
import Meals from './Components/Meals/Meals';
import Header from './Components/Layout/Header'
import Cart from './Components/Cart/Cart'
import CartProvider from './store/CartProvider';
function App() {
 
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
  setCartIsShown(true);
};

const  hideCartHandler=()=>{
  setCartIsShown(false);
};

  return (

 <CartProvider>
  {cartIsShown &&<Cart onClose={hideCartHandler} />}
  <Header onShowCart={showCartHandler}/>
  <main className='main'>
    <Meals />
  </main>
 </CartProvider>
  )
}

export default App;
