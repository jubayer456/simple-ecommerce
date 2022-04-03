import React from 'react';
import { Link } from 'react-router-dom';
import { deleteFullCart, removeFromDb } from '../../utilities/fakeDb';
import useCarts from '../../utilities/useCarts';
import useProducts from '../../utilities/useProducts';
import Cart from '../Cart/Cart';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Order.css';
import empty from '../../images/icon_empty_cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [carts, setCarts] = useCarts(products);
    const clearBtn = () => {
        setCarts([]);
        deleteFullCart();
    }
    const deleteItem = (product) => {
        const rest = carts.filter(cart => cart.id !== product.id)
        setCarts(rest);
        removeFromDb(product.id);
    }
    let command;
    if (carts.length === 0) {
        command = <div className='empty'>
            <img className='' src={empty} alt="" />
            <h1>Your Cart is Empty!</h1>
            <p>Looks like you haven't made order yet.</p>
            <Link to='/shop'>
                Continue to Shopping
            </Link>
        </div>
    }

    return (
        <div className='shop-container'>
            <div className="order-review-container">
                {
                    carts.map(product => <ProductDetails
                        key={product.id}
                        product={product}
                        deleteItem={deleteItem}
                    ></ProductDetails>)
                }
                {command}
            </div>
            <div className="cart-container">
                <Cart cart={carts}
                    clearBtn={clearBtn}
                >
                    <Link to="/manageInventory">
                        <button className='cart-btn-2'>Proceed to Checkout  <FontAwesomeIcon icon={faCalculator} /></button>
                    </Link>
                </Cart>
            </div>

        </div >
    );
};

export default Order;