const Produit = require('../models/produitModel');

exports.getProduits = (req, res) => {
    Produit.getAll((err, result) => {
        if (err) res.status(500).json(err);
        res.json(result);
    });
};

exports.getProduitById = (req, res) => {
    Produit.getById(req.params.id, (err, result) => {
        if (err) res.status(500).json(err);
        res.json(result[0]);
    });
};

exports.createProduit = (req, res) => {
    const { nom, prix, description, image } = req.body;
    Produit.create(nom, prix, description, image, (err, result) => {
        if (err) res.status(500).json(err);
        res.status(201).json({ message: 'Produit ajouté', id: result.insertId });
    });
};
