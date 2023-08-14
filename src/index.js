
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShoppingCartProvider } from './component/ShoppingCartContext'; // Import the context

import App from './App'; // Your main app component

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
