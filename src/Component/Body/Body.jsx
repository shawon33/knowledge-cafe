import "./Body.css"
import React, { useEffect, useState } from 'react';
import '../../../public/data.json';
import Product from "../Product/Product";
import Cart from "../Cart/Cart";


const Body = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart]=useState([]);
  
    

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    

    const handleCard=(product)=>{
        const newCart=[... cart,product];
        setCart(newCart);
    }

    return (
        <>
           <div className='shop-container'>
              <div className="products-container">
               {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleCard={handleCard}
                ></Product>)
               }
              </div>
              <div className='cart-container'>
                <Cart cart={cart}></Cart>
              </div>
            </div>
            
        </>
    );
};

export default Body;