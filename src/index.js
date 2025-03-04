import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/reset.css';
import './assets/css/style.css';
import './assets/css/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);