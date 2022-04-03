import React from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteFullCart, removeFromDb } from '../../utilities/fakeDb';
import useCarts from '../../utilities/useCarts';
import useProducts from '../../utilities/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Order.css'

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
            </div>
            <div className="cart-container">
                <Cart cart={carts}
                    clearBtn={clearBtn}
                >
                    <Link to="/manageInventory">
                        <button className='cart-btn-2'>Proceed to Checkout</button>
                    </Link>
                </Cart>
            </div>

        </div >
    );
};

export default Order;