import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addOnLocalDb, getFromLocalDb} from '../../utilities/local';

const Shop = () => {
const [products,setProducts] = useState([]);
const[cart,setCart] = useState([])
useEffect(()=>{

    fetch(`products.json`)
    .then(res=>res.json())
    .then(data=>
        setProducts(data)
    )
},[]);
useEffect(()=>{
    const storeLocalCart = getFromLocalDb();
    let storeCase =[];
    for(const idom in storeLocalCart){
        const addedProduct = products.find(product=>product.id ===idom);
        if(addedProduct){

            const quuQuantity = storeLocalCart[idom]
            addedProduct.quantity = quuQuantity;
            // console.log(addedProduct)
            storeCase.push(addedProduct)
        }
    }
    setCart(storeCase)
},[products])

const handelToAdd = (selectedItem) =>{
    let newCart =[]
    const exist = cart.find(pro=>pro.id === selectedItem.id);
        if(!exist){
            selectedItem.quantity =1;
             newCart = [...cart,selectedItem];
        }else{
            const rest = cart.filter(pro=> pro.id !== selectedItem.id);
            exist.quantity = exist.quantity + 1
            newCart =[...rest,exist]
        }
    
    setCart(newCart)
    addOnLocalDb(selectedItem.id);
 
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
            
        </div>

    </div>
);
};

export default Shop;