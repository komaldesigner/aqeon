import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './comman/Header';
import Footer from './comman/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Product2 from './pages/Products2';
import Contact from './pages/Contact';

function App() {
  return (
      <div>
      <Router>        
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/Products2" element={<Product2 />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
