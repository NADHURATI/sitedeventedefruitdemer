const db = require('../config/db');

class Utilisateur {
    static getByEmail(email, callback) {
        db.query("SELECT * FROM utilisateurs WHERE email = ?", [email], callback);
    }

    static create(prenom, nom, email, mot_de_passe, telephone, adresse, callback) {
        db.query(
            "INSERT INTO utilisateurs (prenom, nom, email, mot_de_passe, telephone, adresse) VALUES (?, ?, ?, ?, ?, ?)", 
            [prenom, nom, email, mot_de_passe, telephone, adresse], 
            callback
        );
    }
}

module.exports = Utilisateur;
