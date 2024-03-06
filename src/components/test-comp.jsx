// TestComponent.js
import React, { useState } from 'react';
import SelectedProductFetcher from '../components/test/selectedProductFetcher';

const TestComponent = () => {
  const [productDetails, setProductDetails] = useState(null);

  // Function to set the fetched product details
  const handleSetProductDetails = (details) => {
    setProductDetails(details);
  };

  return (
    <div>
      <h2>Test Component</h2>
      {/* Render the fetched product details */}
      {productDetails && (
        <div>
          <h3>Product Details</h3>
          <p>Name: {productDetails.productName}</p>
          <p>Price: {productDetails.productPrice}</p>
          {/* Add more details as needed */}
        </div>
      )}

      {/* Fetch product details using SelectedProductFetcher */}
      <SelectedProductFetcher setProductDetails={handleSetProductDetails} />
    </div>
  );
};

export default TestComponent;
