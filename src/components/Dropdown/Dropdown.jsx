// src/components/Dropdowns.js
import React from 'react';
import { Link } from 'react-router-dom';


const Dropdowns = () => {
  return (
    <div className="dropdowns">
      <div className="dropdown">
        <button className="dropbtn">Ladies</button>
        <div className="dropdown-content">
          {/* Add links or items for the Ladies dropdown */}
          <Link to="/ladies">asa 1</Link>
          <Link to="/ladies">dd 2</Link>
          {/* ... add more items ... */}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Men</button>
        <div className="dropdown-content">
          {/* Add links or items for the Men dropdown */}
          <Link to="/men">hj 1</Link>
          <Link to="/men">klk 2</Link>
          {/* ... add more items ... */}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Apparels</button>
        <div className="dropdown-content">
          {/* Add links or items for the Apparels dropdown */}
          <Link to="/apparels">askl 1</Link>
          <Link to="/apparels">ioi 2</Link>
          {/* ... add more items ... */}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Sale</button>
        <div className="dropdown-content">
          {/* Add links or items for the Sale dropdown */}
          <Link to="/sale">Category 1</Link>
          <Link to="/sale">Category 2</Link>
          {/* ... add more items ... */}
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
