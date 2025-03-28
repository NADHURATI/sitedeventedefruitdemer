const db = require('../config/db');  
// Importation de la configuration de la base de données (connexion MySQL)

class Utilisateur {
    // Définition de la classe Utilisateur pour gérer les opérations liées aux utilisateurs dans la base de données

    static getByEmail(email, callback) {
        // Méthode pour récupérer un utilisateur par son email
        db.query("SELECT * FROM utilisateurs WHERE email = ?", [email], callback);
        // Exécute une requête SQL pour rechercher un utilisateur avec l'email donné
        // 'callback' est une fonction qui sera appelée avec les résultats ou une erreur
    }

    static create(prenom, nom, email, mot_de_passe, telephone, adresse, callback) {
        // Méthode pour créer un nouvel utilisateur dans la base de données
        db.query(
            "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe, telephone, adresse) VALUES (?, ?, ?, ?, ?, ?)", 
            [prenom, nom, email, mot_de_passe, telephone, adresse], 
            callback
        );
        // Exécute une requête SQL d'insertion avec les valeurs fournies
        // 'callback' permet de gérer le retour de la requête (succès ou erreur)
    }
}

module.exports = Utilisateur;  
// Exporte la classe pour pouvoir l'utiliser ailleurs dans l'application (ex. dans les contrôleurs)
