import React from "react";  // Importation de React pour pouvoir utiliser JSX et les fonctionnalités de React.
import "../styles/accueil.css";  // Importation du fichier CSS spécifique à la page d'accueil pour appliquer les styles.
import poulpe from '../assets/images/photo bigorno et poulpe.jpg';  // Importation de l'image du poulpe pour l'afficher sur la page d'accueil.
import logo from '../assets/images/logo fruit de mer.webp';  // Importation de l'image du logo de la marque "Fruits de Mer" au format WebP.

const Homepage = () => {  // Déclaration du composant fonctionnel "Homepage" (page d'accueil).
    return (  // Retour du JSX, c'est-à-dire la structure HTML que ce composant va rendre.
        <div>  
            <nav className="nav">  
                <div className="logo">  
                    <img src={logo} alt="Fruits de Mer Logo" />  {/* Affichage de l'image du logo. Le texte "alt" s'affiche si l'image ne peut être chargée. */}
                </div>
                {/* Les liens de navigation permettent à l'utilisateur de se déplacer sur le site */}
                <a href="#">Accueil</a>  {/* Lien vers la page d'accueil */}
                <a href="#">Produits</a>  {/* Lien vers la page des produits */}
                <a href="#">À propos</a>  {/* Lien vers la page "À propos" */}
                <a href="#">Contact</a>  {/* Lien vers la page de contact */}
                <a href="#">Paiement</a>  {/* Lien vers la page de paiement */}
                {/* Les liens pour se connecter ou s'inscrire */}
                <div className="auth-links">  {/* Section regroupant les liens de connexion et d'inscription */}
                    <a href="#">Connexion</a>  {/* Lien vers la page de connexion */}
                    <a href="#">Inscription</a>  {/* Lien vers la page d'inscription */}
                </div>
            </nav>

            {/* Section de l'en-tête (header) de la page d'accueil */}
            <header className="header" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?seafood')" }}>
                {/* L'image de fond de l'en-tête est une URL dynamique basée sur des fruits de mer */}
                <h1>Bienvenue chez Fruits de Mer</h1>  {/* Titre principal qui accueille l'utilisateur */}
                <p>"Bienvenue dans l'univers de Fruits de Mer, là où chaque bouchée vous transporte au cœur de l'océan. Découvrez des produits frais, savoureux et authentiques, sélectionnés avec soin pour satisfaire vos papilles. Que la mer soit votre guide et que cette page d'accueil soit le début d'une aventure gustative inoubliable. 🌊🦞🥂"</p>  {/* Paragraphe de présentation de l'entreprise avec une description attrayante */}
                <img src={poulpe} alt="Poulpe" className="poulpe-image" />  {/* Affichage de l'image du poulpe avec une classe CSS pour le styliser */}
            </header>

            {/* Footer de la page, contenant les informations de copyright */}
            <footer className="bg-gray-900 text-white py-6 text-center">  {/* Footer avec fond gris foncé, texte blanc, padding de 6px et centré */}
                <p>&copy; 2025 Tous droits réservés.</p>  {/* Mention légale indiquant les droits d'auteur et l'année */}
            </footer>
        </div>
    );
};

export default Homepage;  // Export du composant "Homepage" pour qu'il soit utilisé ailleurs, par exemple dans "App.js".
