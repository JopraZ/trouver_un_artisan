const { demande } = require('../models');

exports.createDemande = async (req,res) => {
    try {
        const {email_client, message, id_artisan} = req.body

        if (!email_client || !message || !id_artisan) {
            return res.status(400).json ({
                message: 'Tous les champs sont obligatoires'
            });
        }

        const demande = await demande.create ({
            email_cleint,
            message,
            id_artisan,
            date_demande: new date()
        });

        res.status(200).json(demande)
    } catch (error) {
        res.status(500).json({
            message:' Erreur lors de la création de la demande',
            error
        });
    }
};