import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = ({product,handel}) => {
   
   const {price,name,img,seller}  = product
    return (
        <div className='product-sec'>
            <img src={img} alt=''></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='price-tag'>price:${price}</p>
            <p>{seller}</p> 
        
            </div>
            
                
            <button onClick={()=>handel(product)} className='btn-cart'>
            
                <p className='btn-text'>AddToCart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;