const db = require('db');  
// Importation de la configuration de la base de données (connexion MySQL)

class Produit {
    // Définition de la classe Produit pour gérer les opérations liées aux produits dans la base de données

    static getAll(callback) {
        // Récupère tous les produits de la base de données
        db.query("SELECT * FROM produits", callback);
        // Exécute une requête SQL pour sélectionner tous les produits
        // 'callback' est une fonction qui gère la réponse ou l'erreur de la requête
    }

    static getById(id, callback) {
        // Récupère un produit par son ID
        db.query("SELECT * FROM produits WHERE id = ?", [id], callback);
        // La requête utilise un paramètre `?` pour éviter les injections SQL
        // 'callback' est appelé avec le résultat de la requête
    }

    static create(nom, prix, description, image, callback) {
        // Ajoute un nouveau produit dans la base de données
        db.query(
            "INSERT INTO produits (nom, prix, description, image) VALUES (?, ?, ?, ?)", 
            [nom, prix, description, image], 
            callback
        );
        // La requête insère un nouveau produit avec les valeurs fournies
        // 'callback' permet de gérer le retour (succès ou erreur)
    }
}

module.exports = Produit;  
// Exporte la classe Produit pour pouvoir l'utiliser dans d'autres parties de l'application
