import React from 'react';
import './Home.css';
import cp from '../../images/cover pic.png';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="container">
            <div className='row g-4 m-5 d-flex align-items-center'>
                <div className='col col-lg-8 col-12'>
                    <h5 className='offer mb-5'>Sale up to 70% off</h5>
                    <h2>New Collection For Fall</h2>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <Link to='/shop' ><button className='shop-btn'>Shop now</button></Link>
                </div>
                <div className="col col-lg-4 col-12">
                    <img className='img-fluid' src={cp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;