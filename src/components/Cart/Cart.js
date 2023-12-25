import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    let quantity =0;
    for(const product of cart){
        quantity = quantity + product.quantity
        total = total + product.quantity * product.price;
        shipping = product.quantity * product.shipping;
    }
   let tax = parseFloat((total * 10/100).toFixed(2));
   
   let grandTotal = total + shipping + tax;

    return (
        <div className='cart-info'>
            <h1>Order Summary:</h1>
            <p>seclected item:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Cost:${shipping}</p>
            <p>Tax:${tax}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;