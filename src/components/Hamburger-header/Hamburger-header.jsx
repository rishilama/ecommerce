// Hamburger-header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger-header.css'; // Create this CSS file
import HamburgerDropdown from '../Hamburger-dropdown/Hamburger-dropdown';

const HamburgerHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`mob-screen ${showDropdown ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleDropdown}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <div className="backdrop" onClick={toggleDropdown}></div>
      {showDropdown && <HamburgerDropdown />}
    </div>
  );
};

export default HamburgerHeader;
