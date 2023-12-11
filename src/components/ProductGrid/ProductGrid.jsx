// ProductGrid.js
import React, { useEffect, useState } from 'react';
import ProductAPI from '../../data/ProductAPI';

const ProductGrid = ({ gender, category, subcategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products of the selected category
    const fetchedProducts = subcategory
      ? ProductAPI.products[gender]?.[category]?.[subcategory] || []
      : Object.values(ProductAPI.products[gender]?.[category] || {}).flat() || [];
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
