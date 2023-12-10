// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import Dropdown from '../Dropdown/Dropdown';
import ProductItems from '../../data/ProductItems';

const Header = () => {
  return (
    <div className='parent-container'>
      <header className="header">
      <div className="left-section">
        <div className="customer-service">
          <Link to="/customer-service">Customer Service</Link>
        </div>
        <div className="newsletter">
          <Link to="/newsletter">Newsletter</Link>
        </div>
      </div>
      <div className="center-section">
        <div className="logo">
          <Link to="/"><img src="/images/Sh-Logo.png" alt="header-site-logo" className='header-site-logo' /></Link>
        </div>
      </div>
      <div className="right-section">
        <div className="sign-in">
          <Link to="/sign-in">Become a sneakerhead</Link>
        </div>
        <div className="cart">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="search-bar">
        {/* Add a search bar component */}
        {/* Example: <input type="text" placeholder="Search" /> */}
      </div>
    </header>
    <Dropdown items={ProductItems} />

    </div>
  );
};



export default Header;
