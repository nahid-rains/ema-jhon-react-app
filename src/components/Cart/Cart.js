import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
   let tax = total * 10/100;
   let grandTotal = total + shipping + tax;

    return (
        <div className='cart-info'>
            <h1>Order Summary:</h1>
            <p>seclected item:{cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping Cost:${shipping}</p>
            <p>Tax:${tax}</p>
            <p>Grand Total:${grandTotal}</p>
        </div>
    );
};

export default Cart;