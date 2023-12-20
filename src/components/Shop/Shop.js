import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        // fetch(` https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handelToAdd = (product) =>{
        // console.log(product)
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='mother-container'>
           <div className='product-container'>
            
            {
                products.map((product)=><Product key={product.id} product={product} handel={handelToAdd}></Product>)
            }
           </div>
           <div className='cart-container'>
           <h1>Order Summary:</h1>
           <p>seclected item:{cart.length}</p>
           </div>

        </div>
    );
};

export default Shop;