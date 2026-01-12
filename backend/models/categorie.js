const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class categorie extends Model {}

categorie.init(
    {
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
    },
    {
        sequelize,
        modelName: 'categorie',
        tableName: 'categorie',
        timestamps: false
    }
);

module.exports = categorie;
