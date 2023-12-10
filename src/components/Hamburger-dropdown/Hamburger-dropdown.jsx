// Dropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerDropdown = () => {
  return (
    <div className="hamburgerdropdown">
      <Link to="/link1">Men</Link>
      <Link to="/link2">Ladies</Link>
      <Link to="/link3">Sale</Link>
      <Link to="/link3">Customer Service</Link>
      <Link to="/link3">Newsletter</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default HamburgerDropdown;
