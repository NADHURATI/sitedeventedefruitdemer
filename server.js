const express = require('express');
const database = require('./db'); // Connexion à la base de données
const cors = require('cors');

const app = express();

app.use(cors());


// Route pour récupérer tous les posts
app.get("/", (req, res) => {
  res.send("Bienvenue sur ma page")
});

app.get("/api/message", (req, res) => {
  // Message de bienvenue
  res.json({ message: "Bienvenue sur le backend" });
  database.query('SELECT *FROM utilisateurs');

  //Insertion d'un utilisateur dans la table `utilisateurs`
  const sql = "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe, telephone, adresse, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = ["Fatima", "Said", "fatima.said@gmail.com", "password456", "0623456789", "15 avenue des pêcheurs, Mamoudzou", "client"];

  database.query(sql, values, (err, result) => {
    if (err) {
      console.error("Erreur lors de l'insertion de l'utilisateur :", err);
      return;
    }
    console.log("Utilisateur inséré avec succès !");
  });
});

app.listen(3000,() => console.log("serveur demarre sur http://localhost:3000"));