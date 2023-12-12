// ProductGrid.js
import React, { useEffect, useState } from 'react';
import ProductAPI from '../../data/ProductAPI';
import './ProductGrid.css';

const ProductGrid = ({ gender, category, subcategory }) => {
  const [products, setProducts] = useState([]);
  const [subcategorySelected, setSubcategorySelected] = useState(false);

  useEffect(() => {
    // Fetch all products of the selected category
    const fetchedProducts = subcategory
      ? ProductAPI.products[gender]?.[category]?.[subcategory] || []
      : Object.values(ProductAPI.products[gender]?.[category] || {}).flat() || [];
    setProducts(fetchedProducts);

    // Set the state to true when a subcategory is selected
    if (subcategory) {
      setSubcategorySelected(true);
    }
  }, [gender, category, subcategory]);

  return (
    <div className={`product-grid ${subcategorySelected ? 'slide-in' : ''}`}>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="single-product__image-container">
              <img src={`/images/product_images/${product.picture}`} alt={product.name} className='product-image' />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
