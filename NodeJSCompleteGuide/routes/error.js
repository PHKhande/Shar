const path = require('path');

const express = require('express');

const errorController = require('../controllers/errors');

const router = express.Router();

// /admin/add-product => GET
router.get('/', errorController.errorforus);


module.exports = router;
