const db = require('../config/db');

exports.getAllCategories = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id_categorie, nom FROM categorie');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        message: 'Erreur lors de la récupération des catégories'
        });
    }
};
