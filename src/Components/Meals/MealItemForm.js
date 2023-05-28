import React from 'react'
import './MealItemForm.css'
import Input from '../UI/Input'
import {useRef , useState} from 'react'

function MealItemForm(props) {

  const [amountValid, setAmountValid]=useState(true);
const amountInputRef=useRef();
  const submitHandle=event=>{
event.preventDefault();
const enteredAmount= amountInputRef.current.value;
const enteredAmountNum= +enteredAmount;

if(enteredAmount.trim().length===0 || enteredAmountNum<1 || enteredAmountNum>5 ){
  setAmountValid(false);
  return
}
props.onAdd(enteredAmountNum)
  }
  return (
    <>
     <form className='form' onSubmit={submitHandle}>
      <Input 
      ref={amountInputRef}
      label='Amout' 
       input={{
        id: 'amount_' + props.id,
        type:'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button> + Add</button> 
      {!amountValid && <p>Please enter valid valid Amount</p>} 
        </form> 
    </>
  )
}

export default MealItemForm
