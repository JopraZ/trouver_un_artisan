const sequelize = require('../config/db');

exports.searchArtisans = async (req, res) => {
    const { q } = req.query;

    if (!q || q.length < 1) {
        return res.json([]);
    }

    try {
        const search = `${q}%`;

        const [rows] = await sequelize.query(
        `
        SELECT id_artisan, nom
        FROM artisan
        WHERE nom COLLATE utf8mb4_general_ci LIKE :search
        `,
        {
            replacements: { search }
        }
        );
        res.json(rows);        
    } catch (error) {
        console.error('SEARCH ERROR:', error);
        res.status(500).json({
            message: 'Erreur lors de la recherche des artisans'
        });
    }
};

exports.getArtisanById = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await sequelize.query(
      `
      SELECT 
        a.id_artisan,
        a.nom,
        a.note,
        a.description,
        a.siteweb,
        m.nom AS metier,
        v.nom AS ville
      FROM artisan a
      LEFT JOIN metier m ON a.id_metier = m.id_metier
      LEFT JOIN ville v ON a.id_ville = v.id_ville
      WHERE a.id_artisan = :id
      `,
      {
        replacements: { id }
      }
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Artisan non trouvé' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('ARTISAN BY ID ERROR:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};


exports.getArtisansByCategorie = async (req, res) => {
    const { categorie } = req.query;

    if (!categorie) {
        return res.status(400).json({
            message: 'Paramètre categorie manquant'
        });
    }

    try {
        const [rows] = await sequelize.query(
        `
        SELECT 
            a.id_artisan,
            a.nom,
            a.note,
            m.nom AS metier,
            v.nom AS ville
        FROM artisan a
        JOIN metier m ON a.id_metier = m.id_metier
        JOIN ville v ON a.id_ville = v.id_ville
        WHERE a.categorie = :categorie
        `,
        {
            replacements: { categorie }
        }
        );

        res.json(rows);
    } catch (error) {
        console.error('CATEGORIE ERROR:', error);
        res.status(500).json({
            message: 'Erreur lors de la récupération des artisans'
        });
    }
};
