import React, { useState } from "react";
import "../styles/connexion.css"; // Assurez-vous d'ajouter les styles appropriés

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour authentifier l'utilisateur ici
    console.log("Email:", email);
    console.log("Mot de passe:", password);
    // Réinitialiser les champs après soumission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Se connecter à notre page de Fruit de Mer</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Se connecter</button>
      </form>
      <p className="redirect-link">
        Pas encore de compte ? <a href="/inscription">S'inscrire</a>
      </p>
    </div>
  );
};

export default Login;
