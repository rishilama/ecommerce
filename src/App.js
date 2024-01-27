// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HamburgerHeader from './components/Hamburger-header/Hamburger-header';
import AllProductPage from './pages/All-Product-Page/AllProductPage';
import HomePage from './pages/HomePage/HomePage';
import'./App.css'
import GenderPage from './pages/GenderPage/GenderPage';

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

  return (
    <div className="parent_container">
      <Router>
        {isMobile ? <HamburgerHeader /> : <Header />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:gender/:category/:subcategory" element={<AllProductPage />} />
          <Route path="/:gender/:category" element={<AllProductPage />} />
          <Route path="/:gender" element={<GenderPage />} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
