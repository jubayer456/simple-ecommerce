import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteFullCart, getProduct } from '../../utilities/fakeDb';
import useCarts from '../../utilities/useCarts';
import useProducts from '../../utilities/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
        <div className='container'>
            <div className="row my-5">
                <div className="col col-lg-9 col-12 ">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                addToCartEvent={addToCartEvent}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="col col-lg-3 col-12 ">
                    <div className="cart-container">
                        <Cart cart={carts}
                            clearBtn={clearBtn}
                        >
                            <Link to="/orderReview">
                                <button className='cart-btn-2'>Order Review <FontAwesomeIcon icon={faArrowRight} /></button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Shop;