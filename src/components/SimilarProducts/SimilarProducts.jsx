import React, { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../Cards/Cards";
import "./SimilarProducts.css";

const SimilarProducts = ({ productDetails }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const navigate = useNavigate();

  const handleCardClick = (productName) => {
    const newURL = `/${productName}`;
    navigate(newURL);
  };

  const fetchSimilarProducts = async () => {
    try {
      if (productDetails) {
        const database = getDatabase();
        const snapshot = await get(ref(database, "/"));
        const data = snapshot.val();

        if (data) {
          const filteredProducts = data.filter(
            (product) =>
              product.gender === productDetails.gender &&
              product.category === productDetails.category &&
              product.subcategory === productDetails.subcategory &&
              product.productName !== productDetails.productName
          );

          const shuffledProducts = filteredProducts.sort(
            () => Math.random() - 0.5
          );

          const startIndex = currentPage * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          let paginatedProducts = shuffledProducts.slice(startIndex, endIndex);

          if (paginatedProducts.length < itemsPerPage) {
            const remainingItemsCount = itemsPerPage - paginatedProducts.length;
            const additionalItems = shuffledProducts.slice(
              0,
              remainingItemsCount
            );
            paginatedProducts = [...paginatedProducts, ...additionalItems];
          }

          setSimilarProducts(paginatedProducts);
        } else {
          console.error("No data found in Firebase");
        }
      }
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  };

  useEffect(() => {
    fetchSimilarProducts();
     // eslint-disable-next-line
  }, [productDetails, currentPage, itemsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200 && window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (!productDetails) {
    return null; // Render nothing if productDetails is null
  }

  return (
    <>
      <div className="similar-prod__head-section">
        <h2>Similar Products</h2>
        <Link
          to={`/${productDetails.gender}/${productDetails.category.toLowerCase()}/${productDetails.subcategory.toLowerCase()}`}
        >
          View All
        </Link>
      </div>
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
    </>
  );
};

export default SimilarProducts;
