import React from 'react';
import './Sample.css'
const Sample = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(let prod of cart){
        total = total +  prod.price;
        shipping = shipping + prod.shipping;
    }
    const tax = total * 10/100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-wapper'>
            <h1 style={{color:'yellow'}}>Order summary</h1>
            <p style={{color:'yellow'}}>Selected Item:${cart.length}</p>
            <p style={{color:'yellow'}}>Price:${total}</p>
            <p style={{color:'yellow'}}>Shipping:${shipping}</p>
            <p style={{color:'yellow'}}>Tax:${tax}</p>
            <p style={{color:'yellow'}}>Grand Total:${grandTotal}</p>
        </div>
    );
};

export default Sample;