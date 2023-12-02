// src/App.js
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HamburgerHeader from './components/Hamburger-header/Hamburger-header';
// import ProductList from './pages/ProductList';
// import About from './pages/About';

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
    <Router>
      {isMobile ? <HamburgerHeader /> : <Header />}
      {/* <Header />

      <HamburgerHeader /> */}
      {/* <Switch>
        <Route path="/products" component={ProductList} />
        <Route path="/about" component={About} />
        <Route path="/" exact>
          Your home page component
          <div>Welcome to Your App</div>
        </Route>
      </Switch> */}
    </Router>
  );
};

export default App;
