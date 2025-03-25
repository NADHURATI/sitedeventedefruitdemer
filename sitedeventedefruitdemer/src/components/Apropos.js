// src/pages/APropos.js
import React from "react";
import "../styles/Apropos.css"; // Assure-toi d'importer ton fichier CSS pour cette page
import Chef from "../assets/images/Chef.jpeg";
import Vendeuse from '../assets/images/Vendeuse.webp';
import Livreur from '../assets/images/Livreur.jpg';

const APropos = () => {
  return (
    <div className="about-page">
      <h1>À Propos de Nous</h1>
      <div className="about-content">
        <p>
          Bienvenue sur la page "À propos de nous" ! Chez Fruits de Mer, nous
          sommes passionnés par la qualité et la fraîcheur de nos produits de la
          mer. Nous croyons fermement que chaque bouchée doit être une
          expérience exceptionnelle, c'est pourquoi nous nous engageons à offrir
          uniquement des fruits de mer frais, durables et savoureux.
        </p>
        <p>
          Notre équipe est composée de professionnels dévoués et de passionnés
          qui mettent tout en œuvre pour sélectionner les meilleurs produits pour
          nos clients. Nous travaillons avec des pêcheurs locaux et des
          producteurs responsables pour garantir la qualité et la traçabilité de
          chaque produit.
        </p>
        <h2>Notre Mission</h2>
        <p>
          Notre mission est simple : offrir des produits de la mer de qualité
          supérieure à nos clients tout en soutenant les pratiques de pêche
          durables et respectueuses de l'environnement.
        </p>
        <h2>Notre Vision</h2>
        <p>
          Être le leader dans la distribution de fruits de mer frais et de qualité
          tout en favorisant la durabilité et la responsabilité sociale.
        </p>
      </div>
      <div className="team-section">
        <h2>Notre Équipe</h2>
        <div className="team">
          <div className="team-member">
            <img
              src= {Chef}
              alt="Chef"
              className="team-member-img"
            />
            <h3>Ahmed OMAR</h3>
            <p>Chef de Vente</p>
          </div>
          <div className="team-member">
            <img
              src={Vendeuse}
              alt="Vendeuse"
              className="team-member-img"
            />
            <h3>MARIE Océane </h3>
            <p>Vendeuse</p>
          </div>
          <div className="team-member">
            <img
              src={Livreur}
              alt="Livreur"
              className="team-member-img"
            />
            <h3>SAID Izad</h3>
            <p>Livreur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APropos;
