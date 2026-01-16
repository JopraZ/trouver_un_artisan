const { ville } = require('../models')

exports.getAllVille = async (req,res) => {
    try {
        const ville = await ville.findAll();
        res.json(ville);
    } catch (error) {
        res.status(500).json ({
            message: 'Erreur lor de la récupération des villes',
            error
        });
    }
};