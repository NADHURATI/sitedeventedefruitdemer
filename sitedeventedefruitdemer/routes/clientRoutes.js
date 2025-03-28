const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Route GET pour récupérer tous les clients
router.get('/', clientController.getClients);

// Route GET pour récupérer un client spécifique par son identifiant
router.get('/:id', clientController.getClientById);

// Route POST pour créer un nouveau client
router.post('/', clientController.createClient);

// Route PUT pour mettre à jour les informations d'un client
router.put('/:id', clientController.updateClient);

// Route DELETE pour supprimer un client spécifique
router.delete('/:id', clientController.deleteClient);

// Exportation du module router
module.exports = router;
