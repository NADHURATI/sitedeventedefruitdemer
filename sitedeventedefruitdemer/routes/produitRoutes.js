const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

router.get('/', produitController.getProduits);
router.get('/:id', produitController.getProduitById);
router.post('/', produitController.createProduit);

module.exports = router;
