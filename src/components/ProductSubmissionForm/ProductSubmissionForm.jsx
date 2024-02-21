import React, { useState } from "react";
import "./ProductSubmissionForm.css";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
// import ProductFormSubmitted from "../Product-Form-Submitted/Product-Form-Submitted";


const firebaseConfig = {
    apiKey: "AIzaSyA0a1HfRzT_IzmO0-qnzbybtgFT3aNVX7o",
    authDomain: "products-list-50418.firebaseapp.com",
    databaseURL: "https://products-list-50418-default-rtdb.firebaseio.com",
    projectId: "products-list-50418",
    storageBucket: "products-list-50418.appspot.com",
    messagingSenderId: "327555328633",
    appId: "1:327555328633:web:02fbbdf1948f7bb7f142a8",
    measurementId: "G-SLF18NVH5W"
}; 

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function ProductSubmissionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    id: "",
    gender: "",
    category: "",
    subcategory: "",
    productName: "",
    productPrice: "",
    productImages: {}, // Change to object to store multiple image names
    sizes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeImage = (event, index) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      productImages: {
        ...formData.productImages,
        [index]: value
      }
    });
  };

  const handleAddImage = () => {
    const numImages = Object.keys(formData.productImages).length;
    setFormData({
      ...formData,
      productImages: {
        ...formData.productImages,
        [numImages]: ""
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const productRef = ref(database, `${formData.id}`);
      await set(productRef, formData);
      console.log('Form data submitted to Firebase:', formData);

      if (typeof onSubmit === 'function') {
        onSubmit(formData);
      }

      setFormData({
        id: "",
        gender: "",
        category: "",
        subcategory: "",
        productName: "",
        productPrice: "",
        productImages: {}, // Resetting image object
        sizes: "",
      });
    } catch (error) {
      console.error('Error submitting form data to Firebase:', error);
    }
  };


// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// function ProductSubmissionForm({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     id: "",
//     gender: "",
//     category: "",
//     subcategory: "",
//     productName: "",
//     productPrice: "",
//     productImage: "",
//     sizes: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       // Set the key to the value of the 'id' field
//       const productRef = ref(database, formData.id);
  
//       // Set the form data to the specified key in Firebase database
//       await set(productRef, formData);
//       console.log('Form data submitted to Firebase:', formData);
  
//       // Call the onSubmit callback function if provided
//       if (typeof onSubmit === 'function') {
//         onSubmit(formData);
//       }
  
//       // Reset the form data
//       setFormData({
//         id: "",
//         gender: "",
//         category: "",
//         subcategory: "",
//         productName: "",
//         productPrice: "",
//         productImage: "",
//         sizes: "",
//       });
//     } catch (error) {
//       console.error('Error submitting form data to Firebase:', error);
//     }
//   };
  
  
  

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Push the form data to Firebase database
//       await push(ref(database), formData);
//       console.log('Form data submitted to Firebase:', formData);

//       // Call the onSubmit callback function if provided
//       if (typeof onSubmit === 'function') {
//         onSubmit(formData);
//       }

//       // Reset the form data
//       setFormData({
//         id: "",
//         gender: "",
//         category: "",
//         subcategory: "",
//         productName: "",
//         productPrice: "",
//         productImage: "",
//         sizes: "",
//       });
//     } catch (error) {
//       console.error('Error submitting form data to Firebase:', error);
//     }
//   };
  return (
    <div className="parent-container">
        
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="subcategory"
          placeholder="Subcategory"
          value={formData.subcategory}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="productPrice"
          placeholder="Product Price"
          value={formData.productPrice}
          onChange={handleChange}
          className="input-field"
        />
        {/* <input
          type="text"
          name="productImage"
          placeholder="Product Image"
          value={formData.productImage}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="productImage"
          placeholder="Product Image"
          value={formData.productImage}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="productImage"
          placeholder="Product Image"
          value={formData.productImage}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="productImage"
          placeholder="Product Image"
          value={formData.productImage}
          onChange={handleChange}
          className="input-field"
        /> */}


<input
          type="text"
          name="productImages"
          placeholder="Number of Images"
          value={Object.keys(formData.productImages).length} // Display number of images
          onChange={handleChange}
          className="input-field"
          disabled // Disabled as this is automatically calculated
        />
        {/* Input fields for multiple image names */}
        {[...Array(Object.keys(formData.productImages).length)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Image ${index + 1}`}
            value={formData.productImages[index] || ""}
            onChange={(e) => handleChangeImage(e, index)}
            className="input-field"
          />
        ))}
        {/* Button to add more images */}
        <button type="button" onClick={handleAddImage} className="add-btn">
          Add Image
        </button>

        <input
          type="text"
          name="sizes"
          placeholder="Sizes"
          value={formData.sizes}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default ProductSubmissionForm;
