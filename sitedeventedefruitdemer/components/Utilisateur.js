// Importation des modules nécessaires
import React, { useEffect, useState } from "react"; // useEffect pour exécuter du code au montage et useState pour gérer l'état
import axios from "axios"; // Axios pour effectuer des requêtes HTTP

// Définition du composant Utilisateurs
const Utilisateurs = () => {
  // Déclaration de l'état pour stocker la liste des utilisateurs
  const [utilisateurs, setUtilisateurs] = useState([]);

  // Déclaration de l'état pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    prenom: "",        // Champ pour le prénom
    nom: "",           // Champ pour le nom
    email: "",         // Champ pour l'email
    mot_de_passe: "",  // Champ pour le mot de passe
    telephone: "",     // Champ pour le numéro de téléphone
    adresse: "",       // Champ pour l'adresse
  });

  // useEffect est exécuté une seule fois au montage du composant pour récupérer les utilisateurs
  useEffect(() => {
    fetchUtilisateurs(); // Appel de la fonction qui récupère la liste des utilisateurs
  }, []);

  // Fonction asynchrone pour récupérer les utilisateurs depuis l'API
  const fetchUtilisateurs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/utilisateurs"); // Requête GET à l'API
      setUtilisateurs(response.data); // Mise à jour de l'état avec les données reçues
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs", error); // Gestion des erreurs
    }
  };

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Mise à jour dynamique des valeurs des champs
  };

  // Fonction asynchrone pour soumettre le formulaire et ajouter un utilisateur
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    try {
      await axios.post("http://localhost:3000/api/utilisateurs", formData); // Envoi des données au serveur avec une requête POST
      fetchUtilisateurs(); // Mise à jour de la liste des utilisateurs après ajout
      setFormData({ prenom: "", nom: "", email: "", mot_de_passe: "", telephone: "", adresse: "" }); // Réinitialisation du formulaire
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur", error); // Gestion des erreurs
    }
  };

  // Fonction asynchrone pour supprimer un utilisateur
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/utilisateurs/${id}`); // Requête DELETE pour supprimer un utilisateur par son ID
      fetchUtilisateurs(); // Mise à jour de la liste après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression", error); // Gestion des erreurs
    }
  };

  return (
    <div className="container">
      {/* Affichage de la liste des utilisateurs */}
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {utilisateurs.map((user) => (
          <li key={user.id}> {/* Utilisation de l'ID comme clé unique */}
            {user.prenom} {user.nom} - {user.email} {/* Affichage des informations de l'utilisateur */}
            <button onClick={() => handleDelete(user.id)}>Supprimer</button> {/* Bouton de suppression */}
          </li>
        ))}
      </ul>

      {/* Formulaire d'ajout d'un utilisateur */}
      <h2>Ajouter un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} value={formData.prenom} required />
        <input type="text" name="nom" placeholder="Nom" onChange={handleChange} value={formData.nom} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        <input type="password" name="mot_de_passe" placeholder="Mot de passe" onChange={handleChange} value={formData.mot_de_passe} required />
        <input type="text" name="telephone" placeholder="Téléphone" onChange={handleChange} value={formData.telephone} required />
        <input type="text" name="adresse" placeholder="Adresse" onChange={handleChange} value={formData.adresse} required />
        <button type="submit">Ajouter</button> {/* Bouton de soumission du formulaire */}
      </form>
    </div>
  );
};

export default Utilisateurs; // Exportation du composant pour l'utiliser ailleurs
