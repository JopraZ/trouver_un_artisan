const { Datatype } = require('sequelize')
const sequelize = require('../config/db')

const artisan = sequelize.define('artisan', {

    id_artisan:{
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nom: {
        type: Datatype.STRING,
        allowNull: false
    },

    siteweb: {
        type: Datatype.STRING,
        allowNull: false
    },

    categorie: {
        type: Datatype.TEXT
    },

    description: {
        type: Datatype.TEXT
    },

    id_metier: {
        type: Datatype.INTEGER,
        allowNull: false
    },

    id_ville: {
        type: Datatype.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'artisan',
    timestamps: false
});

module.exports = artisan;