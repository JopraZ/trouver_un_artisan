const artisan = require('./artisan');
const metier = require('./metier');
const ville = require('./ville');
const demande = require('./demande');
const categorie = require('./categorie');

/* =========================
   RELATIONS CATÉGORIES
========================= */

categorie.hasMany(metier, {
    foreignKey: 'id_categorie'
});

metier.belongsTo(categorie, {
    foreignKey: 'id_categorie'
});

/* =========================
   RELATIONS MÉTIERS / ARTISANS
========================= */

metier.hasMany(artisan, {
    foreignKey: 'id_metier'
});

artisan.belongsTo(metier, {
    foreignKey: 'id_metier'
});

/* =========================
   RELATIONS VILLES / ARTISANS
========================= */

ville.hasMany(artisan, {
    foreignKey: 'id_ville'
});

artisan.belongsTo(ville, {
    foreignKey: 'id_ville'
});

/* =========================
   RELATIONS ARTISANS / DEMANDES
========================= */

artisan.hasMany(demande, {
    foreignKey: 'id_artisan'
});

demande.belongsTo(artisan, {
    foreignKey: 'id_artisan'
});

module.exports = {
    artisan,
    metier,
    ville,
    demande,
    categorie
};
