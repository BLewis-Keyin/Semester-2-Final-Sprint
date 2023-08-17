import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Services from './component/services';
import Contact from './component/contact';

import logo from './images/logo1.png'
import AccountIcon from './images/Account icon.png'


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className="nav-links">
          <div className='navbar-wrapper'>
            <img src={logo} className='logo-icon'></img>
            <Link to="/" className="nav-link"><div className='nav-link-container'>Home</div></Link>
            <Link to="/about" className="nav-link"><div className='nav-link-container'>About</div></Link>
            <Link to="/services" className="nav-link"><div className='nav-link-container'>Services</div></Link>
            <Link to="/contact" className="nav-link"><div className='nav-link-container'>Contact</div></Link>
          </div>
        </nav>
        <img src={AccountIcon} className='account-icon'></img>

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