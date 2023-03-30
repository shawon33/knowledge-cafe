import "./Body.css"
import React, { useEffect, useState } from 'react';
import '../../../public/data.json';
import Product from "../Product/Product";

const Body = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);



    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=><Product
                key={product.id}
                product={product}
                ></Product>)
               }
            </div>
            <div className='cart-container'> 
                Kabir
            </div>
        </div>
    );
};

export default Body;