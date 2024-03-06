import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductGrid from '../ProductGrid/ProductGrid';
import './SimilarProducts.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SimilarProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Set the initial number of items per page
  const { gender, category, subcategory, productName } = useParams(); // Extract productName from URL
  const navigate = useNavigate();

  const handleCardClick = (productName) => {
    const newURL = `/${gender}/${category}/${subcategory}/${productName}`;
    navigate(newURL);
  };

  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        // Your Firebase config
        const firebaseConfig = {
          apiKey: "AIzaSyA0a1HfRzT_IzmO0-qnzbybtgFT3aNVX7o",
          authDomain: "products-list-50418.firebaseapp.com",
          databaseURL: "https://products-list-50418-default-rtdb.firebaseio.com",
          projectId: "products-list-50418",
          storageBucket: "products-list-50418.appspot.com",
          messagingSenderId: "327555328633",
          appId: "1:327555328633:web:02fbbdf1948f7bb7f142a8",
          measurementId: "G-SLF18NVH5W"
}; 
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        // Fetch data from Firebase
        const snapshot = await get(ref(database, '/'));
        const data = snapshot.val();

        // Filter items that match the current gender, category, and subcategory
        const filteredItems = data.filter(item => (
          item.gender === gender &&
          item.category === category &&
          item.subcategory === subcategory &&
          item.productName !== productName // Exclude currently open product
        ));

        // Shuffle the filtered items
        shuffleArray(filteredItems);

        // Set fetched and shuffled data to state
        setCategoryProducts(filteredItems);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchDataFromFirebase();
  }, [gender, category, subcategory, productName]); // Add productName as dependency

  useEffect(() => {
    const handleResize = () => {
      // Check the screen width and update itemsPerPage accordingly
      if (window.innerWidth < 1200 && window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    // Call the handleResize function once to set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Calculate the starting index for displaying items
    const startIndex = (currentPage - 1) * itemsPerPage;
    // Check if the current batch is the last batch
    const isLastBatch = startIndex + itemsPerPage >= categoryProducts.length;
    if (isLastBatch) {
      // Reshuffle the products
      shuffleArray(categoryProducts);
      // Reset current page to 1 to start from the beginning
      setCurrentPage(1);
    }
  }, [currentPage, categoryProducts, itemsPerPage]);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Calculate the starting index for displaying items
  const startIndex = (currentPage - 1) * itemsPerPage;
  // Extract a batch of items based on the starting index and itemsPerPage
  const currentCategoryProducts = categoryProducts.slice(startIndex, startIndex + itemsPerPage);

  // Function to handle next page click
  const nextPage = () => {
    const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);
    setCurrentPage((currentPage % totalPages) + 1);
  };

  const prevPage = () => {
    const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);
    setCurrentPage((prevPage) => {
      // Calculate the previous page number
      let prevPageNumber = prevPage - 1;
      // Ensure page number never becomes less than 1
      if (prevPageNumber < 1) {
        prevPageNumber = totalPages;
      }
      return prevPageNumber;
    }); 
  };
  
  return (
    <div className="similar-product__parentContainer">  
      <div className='similar-product-grid__prev-button'>
        <FontAwesomeIcon onClick={prevPage} icon={faArrowLeft} />
      </div>    
      <div className='similar-product__parent-class'>
        <ProductGrid
          gender={gender}
          category={category}
          subcategory={subcategory}
          location={window.location}
          categoryProducts={currentCategoryProducts}
          handleCardClick={handleCardClick}
        />
      </div>
      <div className='similar-product-grid__next-button'>
        <FontAwesomeIcon onClick={nextPage} icon={faArrowRight} />
      </div>
    </div>
  );
};

export default SimilarProducts;
