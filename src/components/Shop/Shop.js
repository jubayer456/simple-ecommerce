import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const addToCartEvent = (product) => {
        console.log(product);
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
                <h2>cart</h2>
            </div>

        </div>
    );
};

export default Shop;