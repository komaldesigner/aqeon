import React, { useEffect } from 'react';
import AOS from 'aos'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './comman/Header';
import Footer from './comman/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Product2 from './pages/Products2';
import Alltotalproducts from './pages/Alltotalproducts';
import Contact from './pages/Contact';
import Brandpartners from './pages/brandpartners';
import About from './pages/aboutus';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  });
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/Products2" element={<Product2 />} />
          <Route path="/Alltotalproducts/:id" element={<Alltotalproducts />} />
          <Route path="/brandpartners" element={<Brandpartners />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
