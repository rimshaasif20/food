import React from 'react'
import { useContext } from 'react'
import './HeaderButton.css'
import CartContext from '../../store/CartContext'
function HeaderCardButton(props) {
  const cartCtx = useContext(CartContext);
debugger;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return( 
  <>
  <button className='button' onClick={props.onClick}>
    <span className='icon'>
    </span>
    <span>
     Your Cart
    </span>
    <span className='badge'>{numberOfCartItems}</span>
    </button>
    </>
  )
}

export default HeaderCardButton
