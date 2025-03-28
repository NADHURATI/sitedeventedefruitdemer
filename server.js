const express = require("express"); // Importation du module Express pour créer le serveur web
const database = require("./db"); // Connexion à la base de données en important le fichier db.js
const cors = require("cors"); // Importation du module CORS pour autoriser les requêtes entre différents domaines

const app = express(); // Création d'une instance d'Express
app.use(cors()); // Activation de CORS pour permettre les requêtes depuis d'autres domaines
app.use(express.json()); // Permet de parser le corps des requêtes au format JSON

// Route principale
app.get("/", (req, res) => { // Définition de la route GET pour la page d'accueil
  res.send("Bienvenue sur ma page"); // Envoi d'un message de bienvenue
});

// Route API message
app.get("/api/message", (req, res) => { // Définition de la route GET pour obtenir un message
  res.json({ message: "Bienvenue sur le backend" }); // Réponse en JSON avec un message de bienvenue
});

// Route pour récupérer tous les utilisateurs
app.get("/api/utilisateurs", (req, res) => { // Définition de la route GET pour récupérer tous les utilisateurs
  database.query("SELECT * FROM utilisateurs", (err, results) => { // Requête SQL pour sélectionner tous les utilisateurs
    if (err) { // Si une erreur survient lors de la requête
      console.error("Erreur lors de la récupération des utilisateurs :", err); // Affichage de l'erreur dans la console
      return res.status(500).json({ message: "Erreur serveur" }); // Réponse avec erreur serveur
    }
    res.json(results); // Réponse avec la liste des utilisateurs en JSON
  });
});

// Route pour récupérer un utilisateur par son ID
app.get("/api/utilisateurs/:id", (req, res) => { // Route GET pour récupérer un utilisateur par son ID
  const userId = req.params.id; // Récupération de l'ID de l'utilisateur à partir des paramètres de la route
  database.query("SELECT * FROM utilisateurs WHERE id = ?", [userId], (err, results) => { // Requête SQL pour récupérer l'utilisateur par ID
    if (err) { // Si une erreur survient lors de la requête
      console.error("Erreur lors de la récupération de l'utilisateur :", err); // Affichage de l'erreur dans la console
      return res.status(500).json({ message: "Erreur serveur" }); // Réponse avec erreur serveur
    }
    if (results.length === 0) { // Si aucun utilisateur n'est trouvé
      return res.status(404).json({ message: "Utilisateur non trouvé" }); // Réponse avec erreur utilisateur non trouvé
    }
    res.json(results[0]); // Réponse avec les détails de l'utilisateur trouvé
  });
});

// Route pour ajouter un utilisateur (POST)
app.post("/api/utilisateurs", (req, res) => { // Route POST pour ajouter un nouvel utilisateur
  const { prenom, nom, email, mot_de_passe, telephone, adresse } = req.body; // Récupération des données envoyées dans le corps de la requête

  if (!prenom || !nom || !email || !mot_de_passe || !telephone || !adresse) { // Vérification que tous les champs sont présents
    return res.status(400).json({ message: "Tous les champs sont requis" }); // Si un champ est manquant, réponse avec erreur 400
  }

  const sql = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe, telephone, adresse, role) VALUES (?, ?, ?, ?, ?, ?, ?)"; // Requête SQL pour insérer un nouvel utilisateur
  const values = [prenom, nom, email, mot_de_passe, telephone, adresse, "client"]; // Valeurs à insérer dans la base de données

  database.query(sql, values, (err, result) => { // Exécution de la requête d'insertion
    if (err) { // Si une erreur survient lors de l'insertion
      console.error("Erreur lors de l'insertion de l'utilisateur :", err); // Affichage de l'erreur dans la console
      return res.status(500).json({ message: "Erreur lors de l'inscription" }); // Réponse avec erreur serveur
    }
    res.status(201).json({ message: "Utilisateur ajouté avec succès", id: result.insertId }); // Réponse avec succès et ID de l'utilisateur ajouté
  });
});

// Route pour mettre à jour un utilisateur
app.put("/api/utilisateurs/:id", (req, res) => { // Route PUT pour mettre à jour un utilisateur par son ID
  const userId = req.params.id; // Récupération de l'ID de l'utilisateur à partir des paramètres de la route
  const { prenom, nom, email, telephone, adresse } = req.body; // Récupération des données envoyées dans le corps de la requête

  const sql = "UPDATE utilisateurs SET prenom=?, nom=?, email=?, telephone=?, adresse=? WHERE id=?"; // Requête SQL pour mettre à jour un utilisateur
  const values = [prenom, nom, email, telephone, adresse, userId]; // Valeurs à mettre à jour

  database.query(sql, values, (err, result) => { // Exécution de la requête de mise à jour
    if (err) { // Si une erreur survient lors de la mise à jour
      console.error("Erreur lors de la mise à jour de l'utilisateur :", err); // Affichage de l'erreur dans la console
      return res.status(500).json({ message: "Erreur serveur" }); // Réponse avec erreur serveur
    }
    if (result.affectedRows === 0) { // Si aucun utilisateur n'a été mis à jour
      return res.status(404).json({ message: "Utilisateur non trouvé" }); // Réponse avec erreur utilisateur non trouvé
    }
    res.json({ message: "Utilisateur mis à jour avec succès" }); // Réponse avec succès
  });
});

// Route pour supprimer un utilisateur
app.delete("/api/utilisateurs/:id", (req, res) => { // Route DELETE pour supprimer un utilisateur par son ID
  const userId = req.params.id; // Récupération de l'ID de l'utilisateur à partir des paramètres de la route

  database.query("DELETE FROM utilisateurs WHERE id = ?", [userId], (err, result) => { // Requête SQL pour supprimer un utilisateur par ID
    if (err) { // Si une erreur survient lors de la suppression
      console.error("Erreur lors de la suppression de l'utilisateur :", err); // Affichage de l'erreur dans la console
      return res.status(500).json({ message: "Erreur serveur" }); // Réponse avec erreur serveur
    }
    if (result.affectedRows === 0) { // Si aucun utilisateur n'a été supprimé
      return res.status(404).json({ message: "Utilisateur non trouvé" }); // Réponse avec erreur utilisateur non trouvé
    }
    res.json({ message: "Utilisateur supprimé avec succès" }); // Réponse avec succès
  });
});

// Lancement du serveur sur le port 3000
app.listen(3000, () => console.log("Serveur démarré sur http://localhost:3000")); // Affichage dans la console que le serveur est démarré
