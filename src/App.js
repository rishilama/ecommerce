// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HamburgerHeader from './components/Hamburger-header/Hamburger-header';
import AllProductPage from './pages/All-Product-Page/AllProductPage';
import HomePage from './pages/HomePage/HomePage';
import'./App.css'
import GenderPage from './pages/GenderPage/GenderPage';
// import ProductSubmissionForm from './components/ProductSubmissionForm/ProductSubmissionForm';
// import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import ProductSubmissionPage from './pages/ProductSubmissionPage/ProductSubmissionPage';
// import TestComponent from './components/test-comp';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import Footer from './components/Footer/Footer';
// import CategoryPage from './pages/NewArrivals/NewArrivals';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Login from './pages/LoginPage/LoginPage';
import Cart from './components/Cart/Cart';


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const handleSubmit = (formData) => {
  //   console.log("Form Data Submitted:", formData);
  //   // Here you can handle the form submission logic, such as sending the data to Firebase.
  // };




  return (
    <div className="parent_container">
      <Router>
        {isMobile ? <HamburgerHeader /> : <Header />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:productName" element={<SingleProductPage />} />
          <Route path="/:gender/:category/:subcategory" element={<AllProductPage />} />
          <Route path="/:gender/:category" element={<CategoryPage />} />
          <Route path="/:gender" element={<GenderPage />} />
          

          <Route path="/new_arrivals" element={<NewArrivals />} />

          <Route path='/join' element={<SignupPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />


          <Route path="/20shopperssquare17sakura03rishi09manila1999" element={<ProductSubmissionPage  />} />

        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;