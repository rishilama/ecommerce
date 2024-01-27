// AllProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import AllProductAPI from '../../data/AllProductAPI'; // Import AllProductAPI
import './AllProductPage.css';

const AllProductPage = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { gender, category, subcategory } = useParams();
  const location = useLocation();

  useEffect(() => {
    setSelectedSubcategory(subcategory);

    // Fetch and set category products when a category is clicked
    if (!subcategory) {
      const products = AllProductAPI.filter(
        (item) => item.gender === gender && item.category === category
      );
      setCategoryProducts(products);
    }
  }, [gender, category, subcategory]);

  const handleCategoryClick = (category) => {
    setSelectedSubcategory(null);

    // Fetch and set category products when a category is clicked
    const products = AllProductAPI.filter(
      (item) => item.gender === gender && item.category === category
    );
    setCategoryProducts(products);
  };

  return (
    <div className="parent-container">
      <div className="product-page">
        <Sidebar
          onSelectSubcategory={setSelectedSubcategory}
          onCategoryClick={handleCategoryClick}
        />
        <ProductGrid
          gender={gender}
          category={category}
          subcategory={selectedSubcategory}
          location={location}
          categoryProducts={categoryProducts}
        />
      </div>
    </div>
  );
};

export default AllProductPage;
