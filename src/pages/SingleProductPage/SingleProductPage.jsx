// SingleProductPage.js
import React from 'react';

const SingleProductPage = ({ product }) => {
    console.log('Product:', product); // Add this line to log the product object
    return (
        <div className="single-product">
          <div className="single-product__image-container">
            <img
              src={`/images/product_images/${product.productImage}`}
              alt={product.productName}
              className="product-image"
            />
          </div>
          <div className="product-details">
            <h2>{product.productName}</h2>
            <p>${product.productPrice}</p>
            <p>{product.description}</p>
            {/* Add more details as needed */}
          </div>
        </div>
    );
};

export default SingleProductPage;
