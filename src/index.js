import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import fi from './locales/fi.json'
import en from './locales/en.json'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <App lang={en}></App>
  </React.StrictMode>
);

reportWebVitals();
