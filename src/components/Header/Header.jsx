import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import Dropdown from '../Dropdown/Dropdown';
import FirebaseDataFetcher from '../test/databaseTest'; // Import FirebaseDataFetcher

const Header = () => {
  const [fetchedData, setFetchedData] = useState([]);

  return (
    <div>
      
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
      <FirebaseDataFetcher setCategoryProducts={setFetchedData} />

    </div>
      <Dropdown items={fetchedData} /> {/* Pass fetched data to Dropdown */}
    </div>
  );
};

export default Header;
