import React from 'react';
import ReactDOM from 'react-dom/client';
import AppA from './AppA';
import AppR from './AppR';
import AppD from './AppD';
import "./assets/styles/index.css";
import "./assets/styles/w3.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppD />
  </React.StrictMode>
);
