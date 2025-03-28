const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous d'avoir la configuration sequelize dans config/database.js

// Définition du modèle de paiement
const Paiement = sequelize.define('Paiement', {
  // ID unique pour chaque paiement
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  montant: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  methode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  datePaiement: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  // Associer le paiement à une commande
  commandeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Commandes',
      key: 'id'
    }
  }
}, {
  timestamps: false, // Si vous n'avez pas besoin de colonnes `createdAt` et `updatedAt`
  tableName: 'paiements' // Nom de la table dans la base de données
});

module.exports = Paiement;
