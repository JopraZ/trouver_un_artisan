const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const categorie = sequelize.define('categorie', {

  id_categorie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },

  slug: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  tableName: 'categorie',
  timestamps: false
});

module.exports = categorie;
