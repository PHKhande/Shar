const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.post('/successfull', productsController.success )

module.exports = router;