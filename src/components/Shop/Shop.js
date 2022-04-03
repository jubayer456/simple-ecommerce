import React, { useEffect, useState } from 'react';
import { addToDb, getProduct } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const [carts, setCarts] = useState([]);
    const addToCartEvent = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);
        addToDb(product.id);
    }
    useEffect(() => {
        const exist = getProduct();
        console.log(exist);
        let newCart = [];

        for (const id in exist) {
            const stored = products.find(product => product.id === id);
            if (stored) {
                stored.quantity = exist[id];
                newCart.push(stored);
            }
        }
        setCarts(newCart);
    }, [products]);
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
                <Cart cart={carts}></Cart>
            </div>

        </div>
    );
};

export default Shop;