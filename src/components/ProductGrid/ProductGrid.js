import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

const ProductGrid = ({ gender, category, subcategory, location, categoryProducts }) => {
  const [products, setProducts] = useState([]);
  const [subcategorySelected, setSubcategorySelected] = useState(false);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  console.log(subcategorySelected)
  // useEffect(() => {
  //   console.log('ProductGrid: useEffect triggered');

  //   if (categoryProducts && categoryProducts.length > 0) {
  //     const fetchedProducts = subcategory
  //       ? categoryProducts.filter(
  //           (item) =>
  //             item.gender === gender &&
  //             item.category === category &&
  //             item.subcategory === subcategory
  //         )
  //       : categoryProducts;

  //     console.log('Fetched Products:', fetchedProducts);

  //     setProducts(fetchedProducts);

  //     if (subcategory) {
  //       setSubcategorySelected(true);
  //     } else {
  //       setSubcategorySelected(false);
  //     }
  //   }
  // }, [gender, category, subcategory, location, categoryProducts]);


  useEffect(() => {
    console.log('ProductGrid: useEffect triggered');
    console.log('Individual Category Products:', categoryProducts);

    if (categoryProducts && categoryProducts.length > 0) {
      const fetchedProducts = subcategory
        ? categoryProducts.filter(
            (item) =>
              item.gender === gender &&
              item.category === category &&
              item.subcategory === subcategory
          )
        : categoryProducts;


        categoryProducts.forEach(product => {
          console.log('Product:', product);
        });
        

  
        console.log("asas",categoryProducts)

      console.log('Fetched Products:', fetchedProducts);
  
      setProducts(fetchedProducts);
  
      console.log(subcategory)
      if (subcategory) {
        setSubcategorySelected(true);
      } else {
        setSubcategorySelected(false);
      }
    }
  }, [gender, category, subcategory, location, categoryProducts]);
  

  console.log(subcategorySelected)
  // Function to handle mouse hover over a product image
  const handleMouseOver = (productId) => {
    setCurrentImageIndices((prevIndices) => ({
      ...prevIndices,
      [productId]: (prevIndices[productId] + 1) % products.find(product => product.id === productId).productImages.length,
    }));
  };

  // Function to handle mouse out from a product image
  const handleMouseOut = (productId) => {
    setCurrentImageIndices((prevIndices) => ({
      ...prevIndices,
      [productId]: 0,
    }));
  };

  return (
    <div className="product-grid">
      <div className="card-container">
        {products.map((product) => {
          const currentImageIndex = currentImageIndices[product.id] || 0;
          return (
            <Link
              key={product.id}
              to={`/${product.productName}`}
              className="product-link"
            >
              <div className="product-card">
                <div className="single-product__image-container">
                  {product.productImages && product.productImages.length > 0 ? (
                    <img
                      src={`/images/product_images/${product.productImages[currentImageIndex]}`}
                      alt={product.productName}
                      className="product-image"
                      onMouseOver={() => handleMouseOver(product.id)}
                      onMouseOut={() => handleMouseOut(product.id)}
                    />
                  ) : (
                    <div className="product-image-placeholder">No Image Available</div>
                  )}
                </div>
                <div className="product-details">
                  <p>{product.subcategory}</p>
                  <h4>{product.productName}</h4>
                  <p>${product.productPrice}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
