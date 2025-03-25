import React, { useEffect, useState } from 'react';
import { getProduits } from '../api';

const ProduitList = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        getProduits().then(setProduits);
    }, []);

    return (
        <div>
            <h2>Nos Fruits de Mer</h2>
            <ul>
                {produits.map(produit => (
                    <li key={produit.id}>
                        <h3>{produit.nom}</h3>
                        <p>{produit.description}</p>
                        <p>Prix: {produit.prix} €</p>
                        <img src={produit.image} alt={produit.nom} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProduitList;
