import React from 'react'
import CartContext from './CartContext'
import {useReducer} from 'react';
const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state, action)=>{
    if(action.type==='ADD'){
        const updateItems= state.items.concat(action.item);
        const updateTotal=state.totalAmount+ action.item.price*action.item.amount;
        return {
            items:updateItems,
            totalAmount:updateTotal
        }
    }
    return  defaultCartState;
}
function CartProvider(props) {
   const [cartState, dispatchCart] =useReducer(cartReducer, defaultCartState);

    function addItem(item){
dispatchCart({type: 'ADD', item: item});
    }
    function removeItem(id){
        dispatchCart({type: 'REMOVE', id: id});
    }
    const cartContext={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem ,
        removeItem: removeItem,
    }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
