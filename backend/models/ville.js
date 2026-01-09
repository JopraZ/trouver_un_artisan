const { Datatype } = require('sequelize')
const sequelize = require('../config/db')

const ville = sequelize.define ('ville', {
    
    id_ville: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom: {
        type: Datatype.STRING,
        allowNull: false
    }
}, {
    tableName: 'ville',
    timestamps: false
});

module.exports = ville;
