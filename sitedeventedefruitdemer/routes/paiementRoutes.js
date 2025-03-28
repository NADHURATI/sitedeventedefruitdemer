const express = require('express');
const router = express.Router();
const paiementController = require('../controllers/paiementController');

// Route GET pour récupérer tous les paiements
router.get('/', paiementController.getPaiements);

// Route GET pour récupérer un paiement spécifique par son identifiant
router.get('/:id', paiementController.getPaiementById);

// Route POST pour créer un nouveau paiement
router.post('/', paiementController.createPaiement);

// Exportation du module router
module.exports = router;
