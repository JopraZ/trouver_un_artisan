const { DataTypes, DATE } = require('sequelize')
const sequelize = require('../config/db')

const demande = sequelize.define('demande', {

    id_demande:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    email_client: {
        type:DataTypes.STRING,
        allowNull: false
    },

    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    date_demande: {
        type: DataTypes.DATE,
        allowNull: false
    },

    id_artisan: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'demande',
    timestamps: false
});

module.exports = demande;