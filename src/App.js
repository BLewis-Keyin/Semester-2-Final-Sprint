import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Services from './component/services';
import Contact from './component/contact';
import { ShoppingCartProvider } from './component/ShoppingCartContext'

const App = () => {




  return (
      <div className="app">
        <BrowserRouter>
          <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;
