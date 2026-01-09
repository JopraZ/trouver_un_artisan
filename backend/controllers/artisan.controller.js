const { artisan, metier, ville } = require('../models');

exports.getAllArtisans = async (req,res) => {
    try {
        const artisans = await artisan.findAll ({
            include: [metier, ville]
        });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({
            message: 'Erreur lors de la récupération des artisans',
            error
        });
    }
};

exports.getAllArtisansById = async (req, res) => {
    try {
        const artisan = await artisan.finByPk(req.params.id, {
            include: [metier, ville]
        });

        if(!artisan)
            return res.status(404).json({ message: 'artisan non trouvé'});
    }
    catch (error) {
        res.status(500).json({
            message:"Erreur lors de la récupération de l'artisan",
            error
        });
    }
};