import React, { useState } from "react";
import "../styles/formulaireLivreur.css";

const FormulaireCommande = () => {
    const [formData, setFormData] = useState({
        prenom: "",
        nom: "",
        email: "",
        adresse: "",
        adresse2: "",
        ville: "",
        etat: "",
        codePostal: "",
        pays: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données de la commande :", formData);
        alert("Commande soumise avec succès !");
    };

    return (
        <div className="form-container">
            <h2>Formulaire de Commande de Livraison</h2>
            <form onSubmit={handleSubmit}>
                <label>Prénom:</label>
                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />

                <label>Nom de famille:</label>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Adresse:</label>
                <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} required />

                <label>Adresse ligne 2:</label>
                <input type="text" name="adresse2" value={formData.adresse2} onChange={handleChange} />

                <label>Ville:</label>
                <input type="text" name="ville" value={formData.ville} onChange={handleChange} required />

                <label>État:</label>
                <input type="text" name="etat" value={formData.etat} onChange={handleChange} required />

                <label>Code postal:</label>
                <input type="text" name="codePostal" value={formData.codePostal} onChange={handleChange} required />

                <label>Pays:</label>
                <select name="pays" value={formData.pays} onChange={handleChange} required>
                    <option value="">Sélectionner un pays</option>
                    <option value="France">France</option>
                    <option value="Belgique">Belgique</option>
                    <option value="Suisse">Suisse</option>
                    <option value="Canada">Canada</option>
                    <option value="États-Unis">États-Unis</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="la reunion">La Réunion</option>
                    <option value="Comores">Comores</option>
                    <option value="Anjouan">Anjouan</option>
                </select>

                <button type="submit">Passer la commande</button>
            </form>
        </div>
    );
};

export default FormulaireCommande;
