import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div >
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/manageInventory">Manage Inventory</Link>
            </div>
        </nav>
    );
};

export default Header;