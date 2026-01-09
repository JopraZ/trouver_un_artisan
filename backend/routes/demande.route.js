const express = require('express');
const router = express.router();


const demandeController = require('../controllers/demande.controller');

router.post('/', demandeController.createDemande);

module.exports = router;