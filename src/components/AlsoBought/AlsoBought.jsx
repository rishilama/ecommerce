import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Cards from '../Cards/Cards';
import "./AlsoBought.css"; // Create the corresponding CSS file

const AlsoBought = ({ productDetails }) => {
  const [boughtProducts, setBoughtProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const navigate = useNavigate();

  const handleCardClick = (productName) => {
    const newURL = `/${productName}`;
    navigate(newURL);
  };

  const fetchBoughtProducts = async () => {
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
              product.subcategory !== productDetails.subcategory &&
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
  
          setBoughtProducts(paginatedProducts);
        } else {
          console.error('No data found in Firebase');
        }
      }
    } catch (error) {
      console.error('Error fetching bought products:', error);
    }
  };
  

  useEffect(() => {
    fetchBoughtProducts();
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

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log("Bought Products:", boughtProducts);
  }, [boughtProducts]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="bought-product__parentContainer">
        <div className='bought-product-grid__prev-button'>
          <FontAwesomeIcon onClick={prevPage} icon={faArrowLeft} />
        </div>
        <div className='bought-product__parent-class'>
          <Cards categoryProducts={boughtProducts} handleCardClick={handleCardClick} />
        </div>
        <div className='bought-product-grid__next-button'>
          <FontAwesomeIcon onClick={nextPage} icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default AlsoBought;
