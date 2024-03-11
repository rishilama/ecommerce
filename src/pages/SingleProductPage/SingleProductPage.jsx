import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedProductFetcher from '../../components/test/selectedProductFetcher';
import SingleProductLeftSection from '../../components/SingleProductLeftSection/SingleProductLeftSection';
import SingleProductRightSection from '../../components/SingleProductRightSection/SingleProductRightSection';
import './SingleProductPage.css';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import AlsoBought from '../../components/AlsoBought/AlsoBought';

function SingleProductPage() {
  const { productName } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // No need to fetch additional details here anymore since FirebaseDataFetcher handles it
  }, [productName]);


  return (
    <div className='parent-container'>
      <div className="single_product_page">
        <div className="single_product_page-left_section">
          <SingleProductLeftSection productDetails={productDetails}/>
        </div>
        <div className="single_product_page-right_section">
          <SingleProductRightSection productDetails={productDetails} />
        </div> 

        <SelectedProductFetcher setProductDetails={setProductDetails} />
      </div>

      <div className="similar-product-section__single-product-page">
          <h2>Similar Products</h2>
          {/* Render ProductGrid component to display similar products */}
          <SimilarProducts productDetails={productDetails} />
      </div>
      <div className="similar-product-section__single-product-page">
          <h2>Others also bought</h2>
          <AlsoBought productDetails={productDetails} />
      </div>
    </div>
  );
}

export default SingleProductPage;
