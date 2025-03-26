import React, { useState } from "react";
import "../styles/paiement.css";

const Paiement = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
    email: "",
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Paiement effectué avec succès !");
  };

  return (
    <div className="paiement-container">
      <h2>Paiement sécurisé</h2>
      <form onSubmit={handleSubmit} className="paiement-form">
        {/* Informations personnelles */}
        <label>Prénom</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Jean"
          required
        />

        <label>Nom</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Dupont"
          required
        />

        <label>Date de naissance</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />

        <label>Numéro de téléphone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="06 12 34 56 78"
          required
        />

        <label>Adresse email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemple@email.com"
          required
        />

        {/* Informations de paiement */}
        <label>Nom sur la carte</label>
        <input
          type="text"
          name="nameOnCard"
          value={formData.nameOnCard}
          onChange={handleChange}
          placeholder="Jean Dupont"
          required
        />

        <label>Numéro de carte</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="1234 5678 9101 1121"
          maxLength="16"
          required
        />

        <div className="paiement-row">
          <div>
            <label>Date d'expiration</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/AA"
              maxLength="5"
              required
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>

        <button type="submit">Payer</button>
      </form>
    </div>
  );
};

export default Paiement;
