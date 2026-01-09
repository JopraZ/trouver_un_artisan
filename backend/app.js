const express = require ('express')
const cors = require ('cors')

const artisanRoutes = require('./routes/artisan.route');
const demandeRoutes = require('./routes/demande.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/artisan', artisanRoutes);
app.use('/api/demande', demandeRoutes);

app.get('/', (req, res) =>{
    res.send('API Trouver un artisan')
});


module.exports = app;