// const express = require('express');
// const path = require('path');

// const routeDir = require('../helper/path');

// const router = express.Router();

// const products = [];

// router.get('/add-product', (req, res, next) => {
//     res.render('add-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product',
//         formsCSS: true,
//         productCSS: true,
//         activeAddProduct: true
//       });
// });

// router.post('/add-product', (req, res, next) => {
//     products.push({ title: req.body.title });
//     res.redirect('/shop');
// });

// exports.routes = router;
// exports.products = products;


const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;