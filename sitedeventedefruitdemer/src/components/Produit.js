// src/pages/Produits.js
import React from "react";
import "../styles/produit.css"; // Assure-toi d'importer ton fichier CSS
import poulpe from '../assets/images/poulpe.png';
import trondro from '../assets/images/Trondro.jpg';
import kamara from '../assets/images/Kamara.jpg';
import crabe from '../assets/images/Crabe.webp';
import crevettes from '../assets/images/crevettes.jpg';
import Calamar from '../assets/images/Calamar.png';
import homard from '../assets/images/homard.jpg';
import Langouste from '../assets/images/Langouste.webp';

const Produits = () => {
  const fruitsDeMer = [
    { name: 'Poulpe', image: poulpe, price: 40 },
    { name: 'Trondro', image: trondro, price: 150 },
    { name: 'Kamara', image: kamara, price: 20 },
    { name: 'Crabe', image: crabe, price: 17 },
    { name: 'Crevettes', image: crevettes, price: 12 },
    { name: 'Calamar', image: Calamar, price: 15 },
    { name: 'Homard', image: homard, price: 9 },
    { name: 'Langouste', image: Langouste, price: 19 }
  ];

  return (
    <div className="products-page">
      <h1>Nos Produits de Fruits de Mer</h1>
      <div className="product-list">
        {fruitsDeMer.map((fruit, index) => (
          <div className="product-card" key={index}>
            <img src={fruit.image} alt={fruit.name} className="product-image" />
            <h2>{fruit.name}</h2>
            <p>Prix: {fruit.price} €</p>
            <button className="add-to-cart">Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
