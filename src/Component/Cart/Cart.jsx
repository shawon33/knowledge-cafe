import './Cart.css'
import React from 'react';

const Cart = ({cart}) => {
 let total =0;
  let name =[];
  for( const product of cart){
    total =total + product.Readingtime
    name = product.name;
  }

    return (
        <div className='cart-info'>
            <div>
                <h1>Spending time:{total}</h1>
            </div>
            <h1>Bookmark Blog: {cart.length}</h1>
            <div>
                <h2>Name: {name}</h2>
            </div>
        </div>
    );
};

export default Cart;