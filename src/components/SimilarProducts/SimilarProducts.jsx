import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cards from "../Cards/Cards";
import "./SimilarProducts.css";

const SimilarProducts = ({ productDetails }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // New state for items per page
  const navigate = useNavigate();

  const handleCardClick = (productName) => {
    const newURL = `/${productName}`;
    navigate(newURL);
  };

  const fetchSimilarProducts = async () => {
    try {
      if (productDetails) {
        const database = getDatabase();
        const snapshot = await get(ref(database, '/'));
        const data = snapshot.val();
  
        if (data) {
          const filteredProducts = data.filter(
            (product) =>
              product.gender === productDetails.gender &&
              product.category === productDetails.category &&
              product.subcategory === productDetails.subcategory &&
              product.productName !== productDetails.productName
          );
  
          let paginatedProducts = [];
          const startIndex = currentPage * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
  
          // Check if endIndex exceeds the length of filteredProducts
          if (endIndex > filteredProducts.length) {
            // Calculate remaining items to fill the page
            const remainingItemsCount = endIndex - filteredProducts.length;
            // Add remaining items from the beginning of filteredProducts
            paginatedProducts = filteredProducts.slice(startIndex)
                                                 .concat(filteredProducts.slice(0, remainingItemsCount));
          } else {
            // No need for additional handling, just slice the filtered products
            paginatedProducts = filteredProducts.slice(startIndex, endIndex);
          }
  
          setSimilarProducts(paginatedProducts);
        } else {
          console.error('No data found in Firebase');
        }
      }
    } catch (error) {
      console.error('Error fetching similar products:', error);
    }
  };
  

  useEffect(() => {
    fetchSimilarProducts();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ productDetails, currentPage, itemsPerPage]); // Update useEffect dependencies

  useEffect(() => {
    // Update itemsPerPage based on screen size
    const handleResize = () => {
      if (window.innerWidth < 1200 && window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect only runs once

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
      <div className="similar-product__parentContainer">
        <div className="similar-product-grid__prev-button">
          <FontAwesomeIcon onClick={prevPage} icon={faArrowLeft} />
        </div>
        <div className="similar-product__parent-class">
          <Cards
            categoryProducts={similarProducts}
            handleCardClick={handleCardClick}
          />
        </div>
        <div className="similar-product-grid__next-button">
          <FontAwesomeIcon onClick={nextPage} icon={faArrowRight} />
        </div>
      </div>
  );
};

export default SimilarProducts;
