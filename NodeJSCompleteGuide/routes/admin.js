const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<html><head><title>Add Product Details</title></head><body><form action="/admin/product" method="POST"><input type="text" name="product"></input><br><br><input type="text" name="productSize"></input><br><br><button type="submit">Add Product</button></form></body></html>`)
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router