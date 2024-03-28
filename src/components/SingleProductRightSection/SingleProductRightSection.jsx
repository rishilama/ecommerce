import React, { useState } from "react";
import "./SingleProductRightSection.css";
import { Link } from "react-router-dom";

function SingleProductRightSection({ productDetails, onAddToCart, onCartVisibilityChange, cartVisiblity }) {
  const [selectedSize, setSelectedSize] = useState(null);
  // const [cartVisiblity, setCartVisiblity] = useState(false)

  const oldPrice = (price) => price * 2;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    
  };

  // console.log(cartVisiblity)


  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart({ ...productDetails, selectedSize });
      setSelectedSize(null);
      onCartVisibilityChange(true);
      // eslint-disable-next-line
      const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Add the new item to cartItems
      const updatedCartItems = [...existingCartItems, { ...productDetails, selectedSize }];

      // Update localStorage with the updated cartItems
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // eslint-disable-next-line
    }
    // eslint-disable-next-line
  };
  // eslint-disable-next-line

  return (
    <div className="productDetails">
      {productDetails && (
        <div className="productDetails__moreDetails">
          <p>
            <b>{productDetails.productName}</b>
          </p>
          <div className="product-price__section">
            <p className="old__price">
              Rs {oldPrice(productDetails.productPrice)}
            </p>
            <h1>Rs {productDetails.productPrice}.00</h1>
          </div>
          <div className="size-button-head">
            <p>Sizes</p>
            <div className="sizes-section">
              {productDetails.sizes.split("-").map((size, index) => (
                <button
                  key={index}
                  className={`size-btn ${
                    size === selectedSize ? "selected" : ""
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  <p><b> {size}</b></p>
                </button>
              ))}
            </div>
          </div>
          <div className="size-chart__section">
            <img
              src="/images/ruler-solid.svg"
              alt="inch-tape"
              className="svg-img"
            />
            <Link className="size-chart__link" to="/sizechart">
              Size Chart
            </Link>
          </div>
          <button
            className="addToCartButton__SingleProductPage"
            onClick={handleAddToCart}
            disabled={!selectedSize}
          >
            <p><b>Add to Cart</b></p>
          </button>
          
          
          <div className="more-delivery-details">
          <div className="delivery-section__details">
            <img
              src="/images/circle-info-solid.svg"
              alt="info"
              className="svg-img"
            />
            <p>Delivery Time : 2-7 days</p>
          </div>

          <div className="delivery-section__details">
            <img src="/images/house-user-solid.svg" alt="house" className="svg-img" />
            <p>Deliverable in 19,000+ Pincodes in India</p>
          </div>
          </div>

          <p>Want Live Video? <b><i><a target="_blank" rel="noreferrer" href={`https://wa.me/917488004099?text=Hello%20I%20want%20a%20live%20video%20of%20${productDetails.productName}`}>Ask us</a></i></b></p>
             
        </div>

        
      )}
    </div>
  );
}

export default SingleProductRightSection;
