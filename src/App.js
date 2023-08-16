import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Services from './component/services';
import Contact from './component/contact';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="nav-links">
          <div className='navbar-wrapper'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home showTasks={true} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;