const express = require('express');
const router = express.router();

const artisanController = require('../controllers/artisan.controller');

router.get ('/:id',artisanController.getAllArtisansById)

module.exports = router;