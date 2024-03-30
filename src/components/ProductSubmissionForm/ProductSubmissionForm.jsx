import React, { useState, useEffect } from "react";
import "./ProductSubmissionForm.css";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDBf3iw58MFYN365IEModwdbtZCLAhmgBA",
  authDomain: "shopperssquare-sakura.firebaseapp.com",
  databaseURL: "https://shopperssquare-sakura-default-rtdb.firebaseio.com/",
  projectId: "shopperssquare-sakura",
  storageBucket: "shopperssquare-sakura.appspot.com",
  messagingSenderId: "231047880262",
  appId: "1:231047880262:web:20f72ca54fb8f2f2847447",
  measurementId: "G-ETDL9332ZR"
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
    productImages: {},
    sizes: "",
  });

  const [operation, setOperation] = useState("create");

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
      if (operation === "create") {
        const productRef = ref(database, `${formData.id}`);
        await set(productRef, formData);
        console.log('Form data submitted to Firebase:', formData);
      } else if (operation === "update") {
        const productRef = ref(database, `${formData.id}`);
        await set(productRef, formData);
        console.log('Form data updated in Firebase:', formData);
      }

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
        productImages: {},
        sizes: "",
      });
    } catch (error) {
      console.error('Error submitting form data to Firebase:', error);
    }
  };
 
  useEffect(() => {
    const fetchData = async () => {
      if (formData.id !== "") {
        const productRef = ref(database, `${formData.id}`);
        const snapshot = await get(productRef);
        if (snapshot.exists()) {
          const productData = snapshot.val();
          setFormData((prevData) => ({ ...prevData, ...productData })); // Merge new data with existing formData
          setOperation("update"); // Set operation to "update"
        } else {
          console.log("Product does not exist.");
          setOperation("create");
          // If product doesn't exist, clear form fields except ID
          setFormData((prevData) => ({
            ...prevData,
            gender: "",
            category: "",
            subcategory: "",
            productName: "",
            productPrice: "",
            productImages: {},
            sizes: "",
          }));
        }
      }
    };
    fetchData();
  }, [formData.id]); // Only run when formData.id changes
  




return (
  <div className="productForm">
    <form className="product-form" onSubmit={handleSubmit}>
      <p style={{marginBottom : "18px"}}>Note: All fields are required</p>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="input-field"
        />
      </label>
      {operation === "create" ? (
        <>
          {/* <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="input-field"
          />
          Other input fields for creation */}

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
      {/* <input
        type="text"
        name="productUniqueName"
        placeholder="Product Unique Name"
        value={formData.productUniqueName}
        onChange={handleChange}
        className="input-field"
      /> */}
      <input
        type="text"
        name="productPrice"
        placeholder="Product Price"
        value={formData.productPrice}
        onChange={handleChange}
        className="input-field"
      />


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
      
   

        </>
      ) : (
        <>
          <p>Product exists. You can update the details.</p>
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
      {/* <input
        type="text"
        name="productUniqueName"
        placeholder="Product Unique Name"
        value={formData.productUniqueName}
        onChange={handleChange}
        className="input-field"
      /> */}
      <input
        type="text"
        name="productPrice"
        placeholder="Product Price"
        value={formData.productPrice}
        onChange={handleChange}
        className="input-field"
      />


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
        </>
      )}
      {/* Other input fields */}
      <button type="submit" className="submit-btn">
        {operation === "create" ? "Create" : "Update"}
      </button>
    </form>
  </div>
);
}

export default ProductSubmissionForm;