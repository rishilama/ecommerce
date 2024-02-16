import React, { useEffect, useState } from 'react';
import './ProductGrid.css';

const ProductGrid = ({ gender, category, subcategory, location, categoryProducts }) => {
  const [products, setProducts] = useState([]);
  const [subcategorySelected, setSubcategorySelected] = useState(false);

  useEffect(() => {
    console.log('ProductGrid: useEffect triggered');

    if (categoryProducts && categoryProducts.length > 0) {
      const fetchedProducts = subcategory
        ? categoryProducts.filter(
            (item) =>
              item.gender === gender &&
              item.category === category &&
              item.subcategory === subcategory
          )
        : categoryProducts;

      console.log('Fetched Products:', fetchedProducts);

      setProducts(fetchedProducts);

      if (subcategory) {
        setSubcategorySelected(true);
      } else {
        setSubcategorySelected(false);
      }
    }
  }, [gender, category, subcategory, location, categoryProducts]);

  return (
    <div className={`product-grid ${subcategorySelected ? 'slide-in' : ''}`}>
      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="single-product__image-container">
              <img
                src={`/images/product_images/${product.productImage}`}
                alt={product.productName}
                className="product-image"
              />
            </div>
            <div className="product-details">
              <h4>{product.productName}</h4>
              <p>${product.productPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
