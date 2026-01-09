const artisan = require('./artisan');
const metier = require('./metier');
const ville = require('./ville');
const demande = require('./demande');

// Un metier à plusieurs artisans
metier.hasMany(artisan, {
    foreignKey: 'id_metier'
});

artisan.belongsTo(metier,{
    foreignKey: 'id_metier'
});

// Une ville à plusieurs artisans

ville.hasMany(artisan, {
    foreignKey: 'id_ville'
});

ville.belongsTo(ville, {
    foreignKey: 'id_ville'
});

// Un artisan à plusieur demandes

artisan.hasMany(demande, {
    foreignKey:'id_artisan'
});

artisan.belongsTo(artisan, {
    foreignKey:'id_artisan'
});

module.exports = {
    artisan,
    metier,
    ville,
    demande
};