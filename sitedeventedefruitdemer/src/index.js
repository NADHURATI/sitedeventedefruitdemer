import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Mise à jour du chemin ici
import App from './components/App'; // Le chemin vers App.js
import reportWebVitals from './reportWebVitals';

// Création du root React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant App dans le DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesurer les performances de l'application (optionnel)
reportWebVitals();
