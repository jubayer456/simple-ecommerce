import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navClass">
            <div class="container">
                <img className='img-fluid' src={logo} alt="" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/orderReview">Order Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/manageInventory">Manage Inventory</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Header;