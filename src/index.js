import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';         // Make sure this file is named App.jsx
import './index.css';            // Only if index.css exists; remove if not used

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
