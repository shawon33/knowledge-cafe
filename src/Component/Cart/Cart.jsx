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
        <div>
            <div>
                <h1>Spending time:{total}</h1>
            </div>
            <p>Selected item: {cart.length}</p>
            <div>
                <p>Name: {name}</p>
            </div>
        </div>
    );
};

export default Cart;