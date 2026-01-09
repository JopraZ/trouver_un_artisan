const app = require('./app')
const sequelize = require ('./config/db');

const PORT = process.env.PORT || 8080;

sequelize.authentificate()
    .then(() =>{
        console.log('Connexion à la base réussi');
        app.listen( PORT, () =>{
            console.log(`Serveur lancé sur http://localhost${PORT}`);   
        });
    })
    .catch (err =>{
        console.log('Erreur de connexion à la base', err);
    });