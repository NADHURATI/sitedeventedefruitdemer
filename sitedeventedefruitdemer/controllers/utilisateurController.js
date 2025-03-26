const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/utilisateurModel');

exports.inscription = (req, res) => {
    const { prenom, nom, email, mot_de_passe, telephone, adresse } = req.body;
    
    bcrypt.hash(mot_de_passe, 10, (err, hash) => {
        if (err) return res.status(500).json({ message: "Erreur lors du hachage du mot de passe" });

        Utilisateur.create(prenom, nom, email, hash, telephone, adresse, (err, result) => {
            if (err) return res.status(500).json({ message: "Erreur d'inscription", err });

            res.status(201).json({ message: "Utilisateur inscrit avec succès" });
        });
    });
};

exports.connexion = (req, res) => {
    const { email, mot_de_passe } = req.body;

    Utilisateur.getByEmail(email, (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ message: "Email ou mot de passe incorrect" });

        const utilisateur = results[0];

        bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe, (err, isMatch) => {
            if (err || !isMatch) return res.status(401).json({ message: "Email ou mot de passe incorrect" });

            const token = jwt.sign({ id: utilisateur.id, role: utilisateur.role }, 'secretkey', { expiresIn: '1h' });
            res.json({ message: "Connexion réussie", token });
        });
    });
};
