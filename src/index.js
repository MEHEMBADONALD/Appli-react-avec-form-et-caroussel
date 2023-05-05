import React from 'react';
import ReactDOM from 'react-dom/client';        // c'est ca qui permet de communiquer avec le navigateur
import App from './App';                        // importer l'application
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));   // permet de recuperer la div
root.render(
  <React.StrictMode>
    <App />                           
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
