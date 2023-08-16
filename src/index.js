import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './component/ShoppingCartContext'; // Import the context
import App from './App'; // Your main app component
import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    </BrowserRouter>  
    <App />
  </React.StrictMode>
);