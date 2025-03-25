import React from "react";
import "../styles/Accueil.css";

const Homepage = () => {
    return (
        <div>
            
            <nav className="nav">
                <a href="#">Accueil</a>
                <a href="#">Produits</a>
                <a href="#">À propos</a>
                <a href="#">Contact</a>
                <div className="auth-links">
                    <a href="#">Connexion</a>
                    <a href="#">Inscription</a>
                </div>
            </nav>
            <header className="header" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?seafood')" }}>
                <h1>Bienvenue chez Fruits de Mer</h1>
                <p>"Bienvenue dans l'univers de Fruits de Mer, là où chaque bouchée vous transporte au cœur de l'océan. Découvrez des produits frais, savoureux et authentiques, sélectionnés avec soin pour satisfaire vos papilles. Que la mer soit votre guide et que cette page d'accueil soit le début d'une aventure gustative inoubliable. 🌊🦞🥂"</p>
            </header>
        </div>
    );
};

export default Homepage;
