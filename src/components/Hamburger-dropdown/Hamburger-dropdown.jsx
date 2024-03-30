// Dropdown.js
import React from "react";
import { Link } from "react-router-dom";
import "./Hamburger-dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const HamburgerDropdown = ({ toggleDropdown }) => {
  return (
    <div className="parentHamburgerDropdown">
      <div className="hamburgerdropdown">
      <div className="dropdownContent">
        <div className="hamburgerClosingIcon">
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon hamburgerClosingIcon__closeIcon"
            onClick={toggleDropdown}
          />
        </div>
        <Link
          to="/new_arrivals"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          New Arrivals
        </Link>
        <Link
          to="/men"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          Men
        </Link>
        <Link
          to="/women"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          Women
        </Link>
        <Link
          to="/link3"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          Sale
        </Link>
        <Link
          to="/link3"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          Size Chart
        </Link>
        <Link
          to="/link3"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          Reviews
        </Link>
        <Link
          to="/link3"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          Customer Service
        </Link>
        <Link
          to="/link3"
          className="hamburgerDropdownLink"
          onClick={toggleDropdown}
        >
          Newsletter
        </Link>
      </div>

        <div className="dropdownFooter">
          <div className="loginSection">
            <Link
              to="/join"
              className="hamburgerDropdownLink loginSectionLInk"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="user-icon hamburgerDropdownUser"
                onClick={toggleDropdown}
              />
              <span className="loginText">Login</span>
            </Link>
          </div>
          <div className="socialMediaSection">
            <Link to="facebook.com">
              <FontAwesomeIcon
                className="socialMediaSection__hamburgerDropdownIcon"
                icon={faFacebookF}
              />
            </Link>
            <Link to="instagram.com">
              <FontAwesomeIcon
                className="socialMediaSection__hamburgerDropdownIcon"
                icon={faInstagram}
              />
            </Link>
          </div>
        </div>
    </div>
    </div>
  );
};

export default HamburgerDropdown;
