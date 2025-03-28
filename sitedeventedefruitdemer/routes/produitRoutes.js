// Importation de la bibliothèque Express pour gérer les routes HTTP
const express = require('express');

// Création d'un objet router d'Express qui permet de définir des routes spécifiques
const router = express.Router();

// Importation du contrôleur produit pour gérer la logique liée aux produits
const produitController = require('../controllers/produitController');

// Définition d'une route GET pour récupérer tous les produits
// La fonction 'getProduits' du contrôleur est appelée lorsque cette route est accédée
router.get('/', produitController.getProduits);

// Définition d'une route GET pour récupérer un produit spécifique par son identifiant 'id'
// La fonction 'getProduitById' du contrôleur est appelée pour récupérer un produit avec l'ID donné
router.get('/:id', produitController.getProduitById);

// Définition d'une route POST pour créer un nouveau produit
// La fonction 'createProduit' du contrôleur est appelée pour créer un produit avec les données envoyées dans la requête
router.post('/', produitController.createProduit);

// Exportation du module router afin qu'il puisse être utilisé dans d'autres parties de l'application
module.exports = router;
