import React from 'react';
import './Cart.css'
const Cart = ({ cart, clearBtn }) => {
    let subTotal = 0;
    let quantity = 0;
    let shipping = 0;
    for (const id of cart) {
        quantity = quantity + id.quantity;
        subTotal = subTotal + id.price * id.quantity;
        shipping = 50;
    }
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = subTotal + shipping + tax;
    return (
        <div className='cart'>
            <h3 >Order Summary</h3>
            <p>Item Selected: {quantity}</p>
            <p>SubTotal: ${subTotal}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Total: ${total}</h3>
            <button onClick={clearBtn} className='cart-btn-1'>Clear Cart</button>
        </div>
    );
};

export default Cart;