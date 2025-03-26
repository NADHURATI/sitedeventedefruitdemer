import React, { useState } from "react";
import "../styles/inscription.css"; // Assurez-vous d'ajouter les styles appropriés

const Signup = () => {
  const [name, setName] = useState("");
  const [first , setfirst] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier que les mots de passe correspondent
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Logique pour enregistrer l'utilisateur ici
    console.log("Nom:", name);
    console.log("Prenom" , first);
    console.log("Email:", email);
    console.log("Mot de passe:", password);
    
    // Réinitialiser les champs après soumission
    setName("");
    setfirst("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="signup-container">
      <h2>Créer un compte sur notre page de Fruit de Mer</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

<label htmlFor="first">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={first}
          onChange={(e) => setfirst(e.target.value)}
          required
        />
        
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
        
        <label htmlFor="confirmPassword">Confirmer le mot de passe :</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <button type="submit" className="signup-button">S'inscrire</button>
      </form>
      
      <p className="redirect-link">
        Vous avez déjà un compte ? <a href="/login">Se connecter</a>
      </p>
    </div>
  );
};

export default Signup;
