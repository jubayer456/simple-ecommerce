import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, addToCartEvent }) => {
    const { name, price, seller, ratings, img } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price: {price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='addToCart-btn' onClick={() => addToCartEvent(product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;