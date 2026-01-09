const { metier } = require('../models');

exports.getAllMetier = async (req,res) => {
    try {
        const metier = await metier.findAll();
        res.json(metier)
    } catch (error) {
        res.status(500).json ({
            message: 'Erreur lors de la récupération du métier',
            error
        });
    }
};