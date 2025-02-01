// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global styles
import App from './App'; // Import the main app component

// Rendering the App component into the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
