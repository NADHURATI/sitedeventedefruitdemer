const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous d'avoir la configuration sequelize dans config/database.js

// Définition du modèle de commande
const Commande = sequelize.define('Commande', {
  // ID unique pour chaque commande
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dateCommande: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  // Associer la commande à un client
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Clients',
      key: 'id'
    }
  }
}, {
  timestamps: false, // Si vous n'avez pas besoin de colonnes `createdAt` et `updatedAt`
  tableName: 'commandes' // Nom de la table dans la base de données
});

// Définir la relation avec le modèle Paiement
Commande.hasOne(require('./paiementModel'), {
  foreignKey: 'commandeId'
});

module.exports = Commande;
