const { artisan } = require('../models');
const db = require('../config/db');

exports.searchArtisans = async (req, res) => {
    const { q } = req.query;

    if (!q || q.length < 1) {
        return res.json([]);
    }

    try {
        const search = `${q}%`;

        const [rows] = await db.query(
        `
        SELECT id_artisan, nom
        FROM artisan
        WHERE nom COLLATE utf8mb4_general_ci LIKE '${search}'
        `
        );

        res.json(rows);
    } catch (error) {
        console.error('SEARCH ERROR:', error);
        res.status(500).json({
        message: 'Erreur lors de la recherche des artisans'
        });
    }
};





/* 📄 FICHE ARTISAN */
exports.getArtisanById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query(
        'SELECT * FROM artisan WHERE id_artisan = ?',
        [id]
        );

        if (rows.length === 0) {
        return res.status(404).json({ message: 'Page non trouvée' });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        message: 'Erreur serveur'
        });
    }
};