const { demande } = require('../models');

const allowedArtisanId = 3;

exports.createDemande = async (req, res) => {
    try {
        const { email_client, message, id_artisan } = req.body;

        // 1️⃣ Vérification des champs obligatoires
        if (!email_client || !message || !id_artisan) {
            return res.status(400).json({
                message: 'Tous les champs sont obligatoires'
            });
        }

        // 2️⃣ Vérification de l’artisan autorisé (AVANT insertion)
        if (parseInt(id_artisan) !== allowedArtisanId) {
            return res.status(404).json({
                message: 'Page non trouvée'
            });
        }

        // 3️⃣ Création de la demande
        const nouvelleDemande = await demande.create({
            email_client,
            message,
            id_artisan,
            date_demande: new Date()
        });

        // 4️⃣ Réponse succès
        return res.status(201).json(nouvelleDemande);

    } catch (error) {
        return res.status(500).json({
            message: 'Erreur lors de la création de la demande',
            error
        });
    }
};
