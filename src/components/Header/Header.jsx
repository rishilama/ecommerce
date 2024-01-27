// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import Dropdown from '../Dropdown/Dropdown';
// import ProductItems from '../../data/ProductItems';
import AllProductAPI from '../../data/AllProductAPI';


const Header = () => {
  return (
    <div className="parent-container header_style">
      <header className="header">
      <div className="left-section">
        <div className="customer-service">
          <Link className="header-link" to="/customer-service">Customer Service</Link>
        </div>
        <div className="newsletter">
          <Link className="header-link" to="/newsletter">Newsletter</Link>
        </div>
      </div>
      <div className="center-section">
        <div className="logo">
          <Link to="/"><img src="/images/Sh-Logo.png" alt="header-site-logo" className='header-site-logo' /></Link>
        </div>
      </div>
      <div className="right-section">
        <div className="sign-in">
          <Link className="header-link" to="/sign-in">Become a sneakerhead</Link>
        </div>
        <div className="cart">
          <Link className="header-link" to="/cart">Cart</Link>
        </div>
      </div>
      <div className="search-bar">
        {/* Add a search bar component */}
        {/* Example: <input type="text" placeholder="Search" /> */}
      </div>
    </header>
    <Dropdown items={AllProductAPI} />

    </div>
  );
};



export default Header;
