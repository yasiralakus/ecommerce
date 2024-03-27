import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

ReactDOM.hydrate(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </App>
  </Router>,
  document.getElementById('root')
);