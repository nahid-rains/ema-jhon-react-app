import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Sample from '../Sample/Sample';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    useEffect(()=>{
        const storedCart = getShoppingCart();
        let saveCart = [];
        for(const id in storedCart){
            const addededProduct = products.find(product=>product.id === id);
            if(addededProduct){
               saveCart.push(addededProduct)
            }
            setCart(saveCart)
        }
    },[products])
    const handelToAdd = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart)
        addToDb(product.id)
        // getShoppingCart(product.id)
    }
    return (
        <div className='mother-container'>
           <div className='product-container'>
            
            {
                products.map((product)=><Product key={product.id} product={product} handel={handelToAdd}></Product>)
            }
           </div>
           <div className='cart-container'>
              <Cart cart={cart}></Cart>
              <Sample cart={cart}></Sample>
           </div>

        </div>
    );
};

export default Shop;