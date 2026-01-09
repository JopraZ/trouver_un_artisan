const express = require('express');
const router = express.Router();

const artisanController = require('../controllers/artisan.controller');

router.get('/alimentation', artisanController.getArtisansAlimentation);
router.get('/:id', artisanController.getAllArtisansById);

module.exports = router;
