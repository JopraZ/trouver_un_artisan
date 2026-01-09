const { artisan } = require('../models');

exports.getArtisansAlimentation = async (req, res) => {
    try {
        const artisans = await artisan.findAll({
            where: { catégorie: 'Alimentation' }
        });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
};

exports.getAllArtisansById = async (req, res) => {
    const ALLOWED_ARTISAN_ID = 3;
    const artisanId = parseInt(req.params.id);

    if (artisanId !== ALLOWED_ARTISAN_ID) {
        return res.status(404).json({ message: 'Page non trouvée' });
    }

    try {
        const artisanData = await artisan.findByPk(ALLOWED_ARTISAN_ID);

        if (!artisanData) {
            return res.status(404).json({ message: 'Page non trouvée' });
        }

        res.json(artisanData);
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error });
    }
};
