// const express = require('express');
// const path = require('path');

// const routeDir = require('../helper/path')
// const adminData = require('./admin');

// const router = express.Router();

// router.get('/shop', (req, res, next) => {
//     const products = adminData.products;
//     res.render('shop', {
//       prods: products,
//       pageTitle: 'Shop',
//       path: '/',
//       hasProducts: products.length > 0,
//       activeShop: true,
//       productCSS: true
//     });
//   });

// module.exports = router;

const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/shop', productsController.getProducts);

module.exports = router;