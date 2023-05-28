import {Fragment} from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'
function Backdrop(props){
    return (
        <div className='backdrop' onClick={props.onClose}></div>
    )
};

function ModalOverlay(props){
    return(
        <>
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
        </>
    )
};
const portalElement=document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement )}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal
