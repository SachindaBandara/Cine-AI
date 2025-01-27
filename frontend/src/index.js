import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode ==> happen two times in the local development / check rendering cycle that has any inconsistance
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
