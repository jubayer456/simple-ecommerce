import React, { useEffect, useState } from 'react';
import { addToDb, deleteFullCart, getProduct } from '../../utilities/fakeDb';
import useCarts from '../../utilities/useCarts';
import useProducts from '../../utilities/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProducts();
    const [carts, setCarts] = useCarts(products);
    const addToCartEvent = (product) => {
        const stored = carts.find(cart => cart.id === product.id);
        let newCart = [];
        if (!stored) {
            product.quantity = 1;
            newCart = [...carts, product];
        }
        else {
            const exist = carts.filter(cart => cart.id !== product.id);
            stored.quantity = stored.quantity + 1;
            newCart = [...exist, product];
        }
        setCarts(newCart);
        addToDb(product.id);
    }
    const clearBtn = () => {
        setCarts([]);
        deleteFullCart();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartEvent={addToCartEvent}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={carts}
                    clearBtn={clearBtn}
                >
                    <button className='cart-btn-2'>Order Review</button>
                </Cart>
            </div>

        </div >
    );
};

export default Shop;