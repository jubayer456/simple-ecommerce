import React from 'react';
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ProductDetails = (props) => {
    const { img, name, price, quantity } = props.product;

    return (
        <div className='productdetails'>
            <div className='inner-details1'>
                <img src={img} alt="" />
                <div className='inner-details'>
                    <p>{name}</p>
                    <p>price: {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <button className='delete-icon'><FontAwesomeIcon icon={faTrash} /></button>


        </div>
    );
};

export default ProductDetails;