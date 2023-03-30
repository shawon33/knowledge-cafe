import './Product.css';
import React from 'react';

const Product = (props) => {
    const {img,name,Author_img,published_Date,Readingtime,}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='img'>
               <div>
                  <img src={Author_img} alt="" />
                  <p>{published_Date}</p>
               </div>
                <p>{Readingtime}menite</p>
            </div>
            <div>
                <p>{name}</p>
            </div>
            <button>Mark as Read</button>
            
        </div>
    );
};

export default Product;