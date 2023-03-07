// const express = require('express');

// const productsController = require('../controllers/errors');

// const router = express.Router();

// router.use('/', productsController.errorforus)

// module.exports = router;


const path = require('path');

const express = require('express');

const productsController = require('../controllers/errors');

const router = express.Router();

router.use('/', productsController.errorforus )

module.exports = router;