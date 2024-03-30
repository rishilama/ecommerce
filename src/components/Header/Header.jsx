import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file
import Dropdown from '../Dropdown/Dropdown';
import FirebaseDataFetcher from '../test/databaseTest'; // Import FirebaseDataFetcher
import Cart from '../Cart/Cart';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ username  }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);

  const handleCartClick = () => {
    setCartVisibility(!cartVisibility); // Toggle cart visibility
  };


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
              {username ? 
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} className="user-icon headerUserIcon" /> 
                </Link>
              : 
              <Link className="header-link" to="/join">Become a sneakerhead</Link>
              }
            </div>
            <div className="cart">
              <button className="header-link btnHeaderLink" onClick={handleCartClick}>Cart</button> {/* Add onClick handler */}
              {cartVisibility && <Cart onCartVisibilityChange={setCartVisibility} cartVisiblity={cartVisibility} username={username} />} {/* Render Cart component if visibility is true */}
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
