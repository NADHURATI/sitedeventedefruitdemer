const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous d'avoir la configuration sequelize dans config/database.js

// Définition du modèle d'avis
const Avis = sequelize.define('Avis', {
  // ID unique pour chaque avis
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  note: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  // Associer l'avis à un produit
  produitId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Produits',
      key: 'id'
    }
  },
  // Associer l'avis à un client
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Clients',
      key: 'id'
    }
  }
}, {
  timestamps: false, // Si vous n'avez pas besoin de colonnes `createdAt` et `updatedAt`
  tableName: 'avis' // Nom de la table dans la base de données
});

// Définir la relation avec le modèle Client
Avis.belongsTo(require('./clientModel'), {
  foreignKey: 'clientId'
});

// Définir la relation avec le modèle Produit
Avis.belongsTo(require('./produitModel'), {
  foreignKey: 'produitId'
});

module.exports = Avis;
