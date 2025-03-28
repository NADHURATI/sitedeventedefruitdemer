// Importation du module Express pour créer un routeur
const express = require('express');

// Création d'un objet Router d'Express pour définir les routes spécifiques
const router = express.Router();

// Importation du contrôleur utilisateur qui gère l'inscription et la connexion
const utilisateurController = require('../controllers/utilisateurController');

// Définition de la route POST pour l'inscription d'un utilisateur
// Cette route appelle la méthode 'inscription' du contrôleur utilisateur
router.post('/inscription', utilisateurController.inscription);

// Définition de la route POST pour la connexion d'un utilisateur
// Cette route appelle la méthode 'connexion' du contrôleur utilisateur
router.post('/connexion', utilisateurController.connexion);

// Exportation du routeur pour qu'il puisse être utilisé dans d'autres fichiers, notamment dans 'app.js'
module.exports = router;
