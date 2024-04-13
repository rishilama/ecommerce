import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged
import { auth } from './components/test/auth'; // Import your Firebase auth instance
import Header from './components/Header/Header';
import HamburgerHeader from './components/Hamburger-header/Hamburger-header';
import AllProductPage from './pages/All-Product-Page/AllProductPage';
import HomePage from './pages/HomePage/HomePage';
import'./App.css'
import GenderPage from './pages/GenderPage/GenderPage';
import ProductSubmissionPage from './pages/ProductSubmissionPage/ProductSubmissionPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import Footer from './components/Footer/Footer';
import NewArrivals from './pages/NewArrivals/NewArrivals';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import EmailVerification from './components/EmailVerification/EmailVerification';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [username, setUsername] = useState(null); // State to store the authenticated user

  console.log("App", username)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check user authentication state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (username) => {
      setUsername(username); // Update user state with the authenticated user
    });

    return unsubscribe; // Unsubscribe from the auth state change listener when the component unmounts
  }, []);

  return (
    <div className="parent_container">
      <Router>
        {isMobile ? <HamburgerHeader username={username} /> : <Header username={username} />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/:productName' element={<SingleProductPage username={username} />} />
          <Route path="/:gender/:category/:subcategory" element={<AllProductPage />} />
          <Route path="/:gender/:category" element={<CategoryPage />} />
          <Route path="/:gender" element={<GenderPage />} />
          <Route path="/new_arrivals" element={<NewArrivals />} />
          <Route path='/join' element={<SignupPage setUsername={setUsername} />} />
          <Route path='/login' element={<LoginPage setUsername={setUsername} />} />
          <Route path='/email-verification' element={<EmailVerification />} />
          <Route path='/profile' element={<ProfilePage username={username} setUsername={setUsername} />} />
          <Route path="/20shopperssquare17sakura03rishi09manila1999" element={<ProductSubmissionPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
