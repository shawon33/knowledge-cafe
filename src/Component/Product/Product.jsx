import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,seller,Author_img,published_Date,Readingtime,}=props.product;

    const handleCard =props.handleCard;
    const idCart=props.idCart;


     return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='img'>
               <div className='img-info'>
                  <img src={Author_img} alt="" />
                    <div>
                      <h3>{seller}</h3>
                    <p>{published_Date}</p>
                    </div>
               </div>
                <p className='prag'>{Readingtime} men  
                 <FontAwesomeIcon className='font' onClick={()=>handleCard(props.product)}   icon={faBookBookmark} />
                 </p>
            </div>
            <div>
                <p>{name}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et!</p>
            </div>
            <button  onClick={()=>(props.product)}>Mark as Read</button>
        </div>
    );
};

export default Product;