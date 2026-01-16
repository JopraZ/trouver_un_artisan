const express = require ('express')
const cors = require ('cors')

const artisanRoutes = require('./routes/artisan.route');
const demandeRoutes = require('./routes/demande.route');
const categorieRoutes = require('./routes/categorie.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', categorieRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/demande', demandeRoutes);

app.get('/', (req, res) =>{
    res.send('API Trouver un artisan')
});

app.use((req, res) => {
    res.status(404).json({ message: 'Page non trouvée' });
});

module.exports = app;