import React from "react";
import "./SingleProductRightSection.css";
import { Link } from "react-router-dom";

function SingleProductRightSection({ productDetails }) {
  const oldPrice = (price) => price * 2;

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
                <button key={index} className="size-btn">
                  {size}
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
          <button className="addToCartButton__SingleProductPage">
            <img
              src="/images/bag-shopping-solid.svg"
              alt="bag"
              className="svg-img cart-svg-img"
            />


            Add to Cart
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

          <p>Product Description: {productDetails.productDescription}</p>
          
        </div>
      )}
    </div>
  );
}

export default SingleProductRightSection;
