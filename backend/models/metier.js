const { Datatype } = require('sequelize')
const sequelize = require('../config/db')

const metier = sequelize.define ('metier', {
    
    id_metier: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom: {
        type: Datatype.STRING,
        allowNull: false
    }
}, {
    tableName: 'metier',
    timestamps: false
});

module.exports = metier;
