import React from 'react';

function CartItem(item, value) {
  const {id, title, img, price,total, count} = item;
  const {increment, decrement, removeItem} = value;
  return (
     <div className="row my-1 text-capitalize text-center">
       <div className="col-1 mx-auto col-lg-2">
         <img src={img} alt="product" className="img-fluid img"/>
       </div>
     </div>
  );
}

export default CartItem;