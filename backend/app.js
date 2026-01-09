const express = require ('express')
const cors = require ('cors')

const app = express

app.request(cors())
app.request(express.json())

app.get('/', (req, res) =>{
    res.send('API Trouver un artisan')
});

module.exports = app;