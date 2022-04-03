import React from 'react';
import './Home.css';
import cp from '../../images/cover pic.png';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home'>
            <div>
                <h5 className='offer'>Sale up to 70% off</h5>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to='/shop' ><button className='shop-btn'>Shop now</button></Link>

            </div>
            <img src={cp} alt="" />
        </div>
    );
};

export default Home;