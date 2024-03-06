import React, { useState } from 'react';
import './SingleProductLeftSection.css'

function SingleProductLeftSection({ productDetails }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className='single-product-page__left-section'>
      
      <div className='pagination'>
        {productDetails && productDetails.productImages && (
          productDetails.productImages.map((image, index) => (
            <img
              key={index}
              src={`/images/product_images/${image}`}
              alt={`image_${index}`}
              onClick={() => handleImageClick(index)}
            />
          ))
        )}
      </div>

      <div className="image-container ">
        {productDetails && productDetails.productImages && (
          <img
            src={`/images/product_images/${productDetails.productImages[selectedImageIndex]}`}
            alt={`image_${selectedImageIndex}`}
          />
        )}
      </div>
    </div>
  );
}

export default SingleProductLeftSection;
