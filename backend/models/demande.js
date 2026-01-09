const { Datatype } = require('sequelize')
const sequelize = require('../config/db')

const demande = sequelize.define('demande', {

    id_demande:{
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    email_client: {
        type:Datatype.STRING,
        allowNull: false
    },

    message: {
        type: Datatype.TEXT,
        allowNull: false
    },

    date_demande: {
        type: Datatype.DATETIME,
        allowNull: false
    },

    id_artisan: {
        type: Datatype.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'demande',
    timestamps: false
});

module.exports = demande;