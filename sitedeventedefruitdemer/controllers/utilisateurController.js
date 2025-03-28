// Importation des modules nécessaires
const bcrypt = require('bcrypt'); // Pour le hachage des mots de passe
const jwt = require('jsonwebtoken'); // Pour la gestion des tokens JWT
const Utilisateur = require('../models/utilisateurModel'); // Modèle utilisateur pour interagir avec la base de données

// Fonction d'inscription d'un utilisateur
exports.inscription = async (req, res) => {
    try {
        // Extraction des données envoyées dans la requête (POST)
        const { prenom, nom, email, mot_de_passe, telephone, adresse } = req.body;

        // Hachage du mot de passe avant de l'enregistrer dans la base de données
        const hash = await bcrypt.hash(mot_de_passe, 10); // Le "10" est le coût du hachage (plus il est élevé, plus c'est sécurisé mais lent)

        // Enregistrement de l'utilisateur dans la base de données
        Utilisateur.create(prenom, nom, email, hash, telephone, adresse, (err, result) => {
            if (err) {
                // En cas d'erreur lors de l'insertion dans la base, on renvoie un message d'erreur en JSON
                return res.status(500).json({ message: "Erreur d'inscription", err });
            }

            // Redirection vers la page de connexion après une inscription réussie
            res.redirect('/login');
        });
    } catch (error) {
        // Gestion des erreurs globales (ex: problème avec bcrypt)
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

// Fonction de connexion d'un utilisateur
exports.connexion = async (req, res) => {
    try {
        // Récupération des informations de connexion envoyées dans la requête (email et mot de passe)
        const { email, mot_de_passe } = req.body;

        // Recherche de l'utilisateur dans la base de données par son email
        Utilisateur.getByEmail(email, async (err, results) => {
            if (err || results.length === 0) {
                // Si l'utilisateur n'est pas trouvé, on retourne une erreur 401 (Non autorisé)
                return res.status(401).json({ message: "Email ou mot de passe incorrect" });
            }

            // Récupération des informations de l'utilisateur trouvé
            const utilisateur = results[0];

            // Vérification du mot de passe en comparant celui saisi avec le hash stocké
            const isMatch = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);

            if (!isMatch) {
                // Si les mots de passe ne correspondent pas, on retourne une erreur 401
                return res.status(401).json({ message: "Email ou mot de passe incorrect" });
            }

            // Création d'un token JWT pour authentifier l'utilisateur
            const token = jwt.sign(
                { id: utilisateur.id, role: utilisateur.role }, // Données stockées dans le token
                'secretkey', // Clé secrète pour signer le token (à stocker dans les variables d'environnement en prod)
                { expiresIn: '1h' } // Durée de validité du token (1 heure)
            );

            // Stockage du token dans un cookie sécurisé (httpOnly empêche l'accès en JS côté client)
            res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });

            // Redirection vers la page du tableau de bord après une connexion réussie
            res.redirect('/dashboard');
        });
    } catch (error) {
        // Gestion des erreurs globales
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

