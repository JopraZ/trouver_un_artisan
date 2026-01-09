const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const artisan = sequelize.define('artisan', {

    id_artisan:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },

    siteweb: {
        type: DataTypes.STRING,
        allowNull: false
    },

    catégorie: {
        type: DataTypes.TEXT
    },

    description: {
        type: DataTypes.TEXT
    },

    id_metier: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_ville: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'artisan',
    timestamps: false
});

module.exports = artisan;