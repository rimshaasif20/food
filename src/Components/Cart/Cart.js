import {useContext} from 'react'
import './Cart.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/CartContext';

function Cart(props) {
    const cartCtx=useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
 const hasItems=cartCtx.items.length>0;
    const cartItems=<ul className='cart-items'>
       {cartCtx.items.map((item)=>(<li>{item.name}</li>))}
    </ul>
;  return (
    <>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className='total'>
            <span> Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className="actions">
        <button className='button_alt' onClick={props.onClose}>Close</button>
       {hasItems && <button className='button'>Order</button>}
        </div>
      </Modal>
      </>
  )
}

export default Cart
