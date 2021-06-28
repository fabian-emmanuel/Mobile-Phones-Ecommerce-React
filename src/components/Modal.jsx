import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom"

class Modal extends Component {
  render() {
    return (
       <ProductConsumer>
         {(value => {
           const {modalOpen, closeModal} = value;
           const {img, title, price} = value.modalProduct;

           if(!modalOpen){
             return null;
           }
           else{
             return (
             <div className="container modal-container">
               <div className="row">
                 <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5">
                   <h5>item added to the cart</h5>
                   <img src={img} className="img-fluid" alt="product"/>
                   <h5>{title}</h5>
                   <h5 className="text-muted">price: ${price}</h5>
                   <Link to="/">
                   <button className="btn-style" onClick={()=>closeModal()}>
                     store
                   </button>
                   </Link>
                   <Link to="/cart">
                     <button className="btn-style cart-btn-style" onClick={()=>closeModal()}>
                       go to cart
                     </button>
                   </Link>

                 </div>
               </div>
             </div>
             )
           }
         })}
       </ProductConsumer>
    );
  }
}

export default Modal;