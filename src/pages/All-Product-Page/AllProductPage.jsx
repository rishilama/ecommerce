// AllProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import FirebaseDataFetcher from '../../components/test/databaseTest';
import './AllProductPage.css';

const AllProductPage = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  const { gender, category, subcategory } = useParams();
  const location = useLocation();

  useEffect(() => {
    setSelectedSubcategory(subcategory);
  }, [subcategory]);

  const handleCategoryClick = (category, products) => {
    setSelectedSubcategory(null);
    setCategoryProducts(products);
  };

  const reverseArrayById = (arr) => {
    // Convert id to number and sort in descending order
    return arr.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  };

  const reversedArray = reverseArrayById(categoryProducts);
  console.log(reversedArray)




  console.log(category)
  console.log(fetchedData)
  return (
    <div className="parent-container">
      <div className="product-page">
        <FirebaseDataFetcher setCategoryProducts={setCategoryProducts} setFetchedData={setFetchedData} />
        <Sidebar
          onSelectSubcategory={setSelectedSubcategory}
          onCategoryClick={handleCategoryClick}
          fetchedData={categoryProducts}
        />
        <ProductGrid
          gender={gender}
          category={category}
          subcategory={selectedSubcategory}
          location={location}
          categoryProducts={reversedArray}
        />
      </div>
    </div>
  );
};

export default AllProductPage;
