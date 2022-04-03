import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let subTotal = 0;
    let quantity = 0;
    let shipping = 0;
    for (const id of cart) {
        quantity = quantity + 1;
        subTotal = subTotal + id.price;
        shipping = 50;
    }
    const tax = subTotal * 0.1;
    const total = subTotal + shipping + tax;
    return (
        <div className='cart'>
            <h3 >Order Summary</h3>
            <p>Item Selected: {quantity}</p>
            <p>SubTotal: ${subTotal}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Total: ${total}</h3>
        </div>
    );
};

export default Cart;