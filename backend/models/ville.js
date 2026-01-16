const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const ville = sequelize.define ('ville', {
    
    id_ville: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'ville',
    timestamps: false
});

module.exports = ville;
