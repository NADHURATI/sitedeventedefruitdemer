const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assurez-vous d'avoir la configuration sequelize dans config/database.js

// Définition du modèle de client
const Client = sequelize.define('Client', {
  // ID unique pour chaque client
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateNaissance: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
}, {
  timestamps: false, // Si vous n'avez pas besoin de colonnes `createdAt` et `updatedAt`
  tableName: 'clients' // Nom de la table dans la base de données
});

// Définir la relation avec le modèle Commande
Client.hasMany(require('./commandeModel'), {
  foreignKey: 'clientId'
});

module.exports = Client;
