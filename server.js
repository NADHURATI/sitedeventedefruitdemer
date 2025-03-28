const express = require("express");
const database = require("./db"); // Connexion à la base de données
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Permet de lire le JSON dans les requêtes

// Route principale
app.get("/", (req, res) => {
  res.send("Bienvenue sur ma page");
});

// Route API message
app.get("/api/message", (req, res) => {
  res.json({ message: "Bienvenue sur le backend" });
});


// Route pour récupérer tous les utilisateurs et afficher les données sous forme de tableau HTML
app.get("/api/utilisateurs", (req, res) => {
  // Exécution de la requête SQL pour récupérer tous les utilisateurs depuis la base de données
  database.query("SELECT * FROM utilisateurs", (err, results) => {
    if (err) {
      // Si une erreur survient lors de l'exécution de la requête, on affiche un message d'erreur dans la console
      console.error("Erreur lors de la récupération des utilisateurs :", err);
      // Renvoie un code HTTP 500 avec un message d'erreur en HTML
      return res.status(500).send("<h1>Erreur serveur</h1>");
    }
    
    // Création du début du tableau HTML avec un titre
    let html = "<h1>Liste des utilisateurs</h1>";
    
    // Début du tableau HTML avec une ligne d'en-tête définissant les colonnes
    html += "<table border='1'><thead><tr><th>ID</th><th>Prénom</th><th>Nom</th><th>Email</th><th>Téléphone</th><th>Adresse</th><th>Role</th><th>Date de création</th></tr></thead><tbody>";
    
    // Pour chaque utilisateur récupéré, on crée une ligne de tableau avec ses informations
    results.forEach(user => {
      html += `
        <tr>
          <td>${user.id}</td>           <!-- Affiche l'ID de l'utilisateur -->
          <td>${user.prenom}</td>       <!-- Affiche le prénom de l'utilisateur -->
          <td>${user.nom}</td>          <!-- Affiche le nom de l'utilisateur -->
          <td>${user.email}</td>        <!-- Affiche l'email de l'utilisateur -->
          <td>${user.telephone}</td>    <!-- Affiche le téléphone de l'utilisateur -->
          <td>${user.adresse}</td>      <!-- Affiche l'adresse de l'utilisateur -->
          <td>${user.role}</td>         <!-- Affiche le rôle de l'utilisateur -->
          <td>${new Date(user.date_creation).toLocaleString()}</td> <!-- Affiche la date de création formatée -->
        </tr>
      `;
    });

    // Fermeture de la section du tableau (fin du <tbody>)
    html += "</tbody></table>";
    
    // Envoie la page HTML avec tous les utilisateurs sous forme de tableau
    res.send(html);
  });
});


// Route pour récupérer un utilisateur par son ID
app.get("/api/utilisateurs/:id", (req, res) => {
  const userId = req.params.id;
  database.query("SELECT * FROM utilisateurs WHERE id = ?", [userId], (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération de l'utilisateur :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json(results[0]);
  });
});

// Route pour ajouter un utilisateur (POST)
app.post("/api/utilisateurs", (req, res) => {
  const { prenom, nom, email, mot_de_passe, telephone, adresse } = req.body;

  if (!prenom || !nom || !email || !mot_de_passe || !telephone || !adresse) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  const sql = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe, telephone, adresse, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [prenom, nom, email, mot_de_passe, telephone, adresse, "client"];

  database.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'insertion de l'utilisateur :", err);
      return res.status(500).json({ message: "Erreur lors de l'inscription" });
    }
    res.status(201).json({ message: "Utilisateur ajouté avec succès", id: result.insertId });
  });
});

// Route pour mettre à jour un utilisateur
app.put("/api/utilisateurs/:id", (req, res) => {
  const userId = req.params.id;
  const { prenom, nom, email, telephone, adresse } = req.body;

  const sql = "UPDATE utilisateurs SET prenom=?, nom=?, email=?, telephone=?, adresse=? WHERE id=?";
  const values = [prenom, nom, email, telephone, adresse, userId];

  database.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erreur lors de la mise à jour de l'utilisateur :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json({ message: "Utilisateur mis à jour avec succès" });
  });
});

// Route pour supprimer un utilisateur
app.delete("/api/utilisateurs/:id", (req, res) => {
  const userId = req.params.id;

  database.query("DELETE FROM utilisateurs WHERE id = ?", [userId], (err, result) => {
    if (err) {
      console.error("Erreur lors de la suppression de l'utilisateur :", err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json({ message: "Utilisateur supprimé avec succès" });
  });
});

app.listen(3000, () => console.log("Serveur démarré sur http://localhost:3000"));
