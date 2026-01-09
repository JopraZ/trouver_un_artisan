const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const metier = sequelize.define ('metier', {
    
    id_metier: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'metier',
    timestamps: false
});

module.exports = metier;
