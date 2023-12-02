// src/App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
// import ProductList from './pages/ProductList';
// import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
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
