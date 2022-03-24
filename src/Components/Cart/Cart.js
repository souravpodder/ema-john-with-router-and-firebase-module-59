import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const {cart} = props;
  console.log(cart);

  let total = 0;
  let shipping = 0;
  for(const product of cart){
    total = total + product.price;
    shipping = shipping + product.shipping;
  }

  let tax = total  * 0.1;

  const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h3>order summery</h3>
      <p>Items Added: {cart.length}</p>
      <p>Total Price: {total} </p>
      <p>Total Shipping Charge: {shipping} </p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total: {grandTotal} </h4>
    </div>
  );
};

export default Cart;