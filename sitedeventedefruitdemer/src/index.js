import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Mise à jour du chemin ici
import App from './components/App'; // Le chemin vers App.js
import reportWebVitals from './reportWebVitals';

// Supprimez cette ligne car elle concerne le backend
// import db from '../config/db'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant App dans le DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesurer les performances de l'application (optionnel)
reportWebVitals();
