// ProductGrid.js
import React, { useEffect, useState } from 'react';
import ProductAPI from '../../data/ProductAPI';

const ProductGrid = ({ gender, category, subcategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the provided parameters
    const fetchedProducts = ProductAPI.products[gender]?.[category]?.[subcategory] || [];
    setProducts(fetchedProducts);
  }, [gender, category, subcategory]);

  return (
    <div className="product-grid">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductGrid;
