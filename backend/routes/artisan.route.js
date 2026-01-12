const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisan.controller');

/* 🔍 RECHERCHE — TOUJOURS EN PREMIER */
router.get('/search', artisanController.searchArtisans);

/* 📄 FICHE ARTISAN */
router.get('/:id', artisanController.getArtisanById);

module.exports = router;
