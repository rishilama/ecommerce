import React from 'react';
import ProductSubmissionForm from '../../components/ProductSubmissionForm/ProductSubmissionForm';
import './ProductSubmissionPage.css';

function ProductSubmissionPage() {
  const handleSubmit = (formData) => {
    console.log("Form Data Submitted:", formData);
    // Here you can handle the form submission logic, such as sending the data to Firebase.
  };

  return (
    <div className='parent-container'>
      <div className="productSubmissionPage">
        <div className="background-image"></div>
        <div className="form-container">
          <ProductSubmissionForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default ProductSubmissionPage;
