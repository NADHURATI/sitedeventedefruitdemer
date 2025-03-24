import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Utiliser "Routes" au lieu de "Switch"
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Produit from "./components/Produit";
import Panier from "./components/Panier";
import db from "../config/db";

const App = () => {
  return (
    // Le composant Router permet de gérer la navigation et les routes
    <Router>
      <Header />  {/* Affichage de l'en-tête du site */}
      
      <div className="content">  {/* Conteneur principal pour le contenu de la page */}
        <Switch>  {/* Switch permet de rendre uniquement la première route correspondante */}
          {/* Route pour la page de connexion */}
          <Route path="/login" component={Login} />
          
          {/* Route pour la page d'inscription */}
          <Route path="/signup" component={Signup} />
          
          {/* Route pour afficher les produits */}
          <Route path="/produits" component={Produit} />
          
          {/* Route pour afficher le panier */}
          <Route path="/panier" component={Panier} />
          
          {/* Route par défaut, si aucune des précédentes ne correspond */}
          <Route path="/" exact component={Produit} />  {/* Affiche les produits sur la page d'accueil */}
        </Switch>
      </div>
      
      <Footer />  {/* Affichage du pied de page */}
    </Router>
  );
};

export default App;  // Exportation du composant principal de l'application
