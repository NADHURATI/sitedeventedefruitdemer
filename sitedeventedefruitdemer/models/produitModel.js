const db = require('../config/db');

class Produit {
    static getAll(callback) {
        db.query("SELECT * FROM produits", callback);
    }

    static getById(id, callback) {
        db.query("SELECT * FROM produits WHERE id = ?", [id], callback);
    }

    static create(nom, prix, description, image, callback) {
        db.query("INSERT INTO produits (nom, prix, description, image) VALUES (?, ?, ?, ?)", 
        [nom, prix, description, image], callback);
    }
}

module.exports = Produit;
