import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, addToCartEvent }) => {
    const { name, price, seller, ratings, img } = product;
    return (
        <div class="col">
            <div class="card h-100 rounded">
                <img src={img} className="card-img-top " alt="..." />
                <div className="card-body ">
                    <p className='my-2'>{name}</p>
                    <p className='my-2'>Price: {price}</p>
                    <p className='my-2'>Manufacturer:{seller}</p>
                    <p className='my-2'>Ratings: {ratings}</p>
                </div>
                <button className='addToCart-btn rounded' onClick={() => addToCartEvent(product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
            </div>
        </div>
    );
};

export default Product;