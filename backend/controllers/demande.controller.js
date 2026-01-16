const sequelize = require('../config/db');

exports.createDemande = async (req, res) => {
    const { nom, email, objet, message, id_artisan } = req.body;

    if (!nom || !email || !objet || !message || !id_artisan) {
        return res.status(400).json({ message: "Champs manquants" });
    }

    try {
        await sequelize.query(
        `
        INSERT INTO demande (nom, email, objet, message, id_artisan)
        VALUES (:nom, :email, :objet, :message, :id_artisan)
        `,
        {
            replacements: { nom, email, objet, message, id_artisan }
        }
        );

        res.status(201).json({ message: "Demande envoyée" });
    } catch (error) {
        console.error("DEMANDE ERROR:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};
