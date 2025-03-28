const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avisController');

// Route GET pour récupérer tous les avis
router.get('/', avisController.getAvis);

// Route GET pour récupérer un avis spécifique par son identifiant
router.get('/:id', avisController.getAvisById);

// Route POST pour créer un nouvel avis
router.post('/', avisController.createAvis);

// Route PUT pour mettre à jour un avis existant
router.put('/:id', avisController.updateAvis);

// Route DELETE pour supprimer un avis spécifique
router.delete('/:id', avisController.deleteAvis);

// Exportation du module router
module.exports = router;
