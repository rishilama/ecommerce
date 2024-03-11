import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import WhatsappLink from "../WhatsappLink/WhatsappLink";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerComponent">
      <div className="parent-container">
        <div className="footer">
          <div className="footer_subSection">
            <div className="links__footerSection ">
              <div className="footerSection__head">
                <p>
                  <b>LINKS</b>
                </p>
              </div>
              <div className="footerSection__body">
                <p>
                  <Link to="/about">About</Link>
                </p>
                <p>
                  <Link to="/size_chart">Size Chart</Link>
                </p>
                <p>
                  <Link to="/customer_service">Customer Service</Link>
                </p>
                <p>
                  <Link to="/newsletter">Newsletter</Link>
                </p>
                <p>
                  <Link to="/sale">Sale</Link>
                </p>
              </div>
            </div>

            <div className="followUs_footerSection">
              <div className="footerSection__head">
                <p>
                  <b>FOLLOW US</b>
                </p>
              </div>
              <div className="footerSection__body social_media_links">
                <Link to="facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Link>
                <Link to="instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
              </div>
            </div>

            <div className="policy__footerSection">
              <div className="footerSection__head">
                <p>
                  <b>POLICY</b>
                </p>
              </div>
              <div className="footerSection__body">
                <p>
                  <Link to="/cod_policy">Cash on Delivery Policy</Link>
                </p>
                <p>
                  <Link to="/exchange">Exchange Policy</Link>
                </p>
                <p>
                  <Link to="/policy_overview">Policy Overview</Link>
                </p>
                <p>
                  <Link to="/terms&condition">Terms & Condition</Link>
                </p>
              </div>
            </div>

            <div className="contactUs_footerSection">
              <div className="footerSection__head">
                <p>
                  <b>CONTACT US</b>
                </p>
              </div>
              <div className="footerSection__body">
                <p>Email: sakura@shoppers.square.com</p>
                <p>Contact: +91 7488004099</p>
                <div className="contactUs_footerSection__whatsappSection">
                  <p>
                    Whatsapp us at:    
                    <WhatsappLink />
                  </p>
                </div>
                <p>Customer Relationship Team is Available 24*7</p>
              </div>
            </div>
          </div>

          <div className="website_name">
            <p>Shoppers Square by TheSassySakura</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
