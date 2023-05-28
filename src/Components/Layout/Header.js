import React,{Fragment} from 'react'
import food1 from '../Assets/food1.jpg'
import './Header.css'
import HeaderCardButton from './HeaderCardButton'
function Header(props) {
  return (
    <Fragment>
      <header className=' header'>
        <h1> Foodess Crush </h1>
    <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className= 'main-image'>
        <img  src={food1} alt="A meal table" />
      </div>
    </Fragment>
  )
}

export default Header
