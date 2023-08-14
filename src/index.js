import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from './component/ShoppingCartContext'; // Import the context
import App from './App'; // Your main app component
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    </BrowserRouter>  
    <App />
    <ShoppingCartProvider>
    </ShoppingCartProvider>

  </React.StrictMode>
);