// AllProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

const AllProductPage = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const { gender, category, subcategory } = useParams();

  useEffect(() => {
    setSelectedSubcategory(subcategory);
  }, [subcategory]);

  return (
    <div className='parent-container'>
        <div className="product-page">
            <Sidebar onSelectSubcategory={setSelectedSubcategory} />
            <ProductGrid gender={gender} category={category} subcategory={selectedSubcategory} />
        </div>
    </div>
  );
};

export default AllProductPage;
