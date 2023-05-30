import React from 'react';
import ReactDOM from 'react-dom/client';
import AppA from './AppA';
import "./assets/styles/index.css";
import "./assets/styles/w3.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppA />
  </React.StrictMode>
);
