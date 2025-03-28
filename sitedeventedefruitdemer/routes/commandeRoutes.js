const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

// Route GET pour récupérer toutes les commandes
router.get('/', commandeController.getCommandes);

// Route GET pour récupérer une commande spécifique par son identifiant
router.get('/:id', commandeController.getCommandeById);

// Route POST pour créer une nouvelle commande
router.post('/', commandeController.createCommande);

// Route PUT pour mettre à jour une commande existante (par exemple, pour changer son statut)
router.put('/:id', commandeController.updateCommande);

// Route DELETE pour supprimer une commande spécifique
router.delete('/:id', commandeController.deleteCommande);

// Exportation du module router
module.exports = router;
