import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProductLeftSection from "../../components/SingleProductLeftSection/SingleProductLeftSection";
import SingleProductRightSection from "../../components/SingleProductRightSection/SingleProductRightSection";
import "./SingleProductPage.css";
import SimilarProducts from "../../components/SimilarProducts/SimilarProducts";
import AlsoBought from "../../components/AlsoBought/AlsoBought";
import Cart from "../../components/Cart/Cart"; // Import Cart component
import SelectedProductFetcher from "../../components/test/selectedProductFetcher"

function SingleProductPage() {
  const { productName } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const [cartVisiblity, setCartVisiblity] = useState(false);

  console.log(cartVisiblity)
  const handleCartVisibilityChange = (isVisible) => {
    setCartVisiblity(isVisible);
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  
  useEffect(() => {
    // No need to fetch additional details here anymore since FirebaseDataFetcher handles it
  }, [productName]);

  return (
    <div className="parent-container">
      {/* Render the Cart component */}
      <Cart cartItems={cartItems}  onCartVisibilityChange={handleCartVisibilityChange} cartVisiblity={cartVisiblity} />
      <div className="single_product_page" id="top">
        <div className="single_product_page-left_section">
          <SingleProductLeftSection productDetails={productDetails} />
        </div>
        <div className="single_product_page-right_section">
          <SingleProductRightSection
            onCartVisibilityChange={handleCartVisibilityChange}
            cartVisiblity={cartVisiblity}
            productDetails={productDetails}
            onAddToCart={addToCart} // Pass addToCart function to handle adding items to the cart
          />
        </div>
      </div>

      <div className="similar-product-section__single-product-page">
        <SimilarProducts productDetails={productDetails} />
      </div>
      <div className="similar-product-section__single-product-page">
        <AlsoBought productDetails={productDetails} />
      </div>

      <SelectedProductFetcher setProductDetails={setProductDetails} />
    </div>
  );
}

export default SingleProductPage;
