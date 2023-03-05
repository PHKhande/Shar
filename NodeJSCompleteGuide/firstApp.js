const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
    res.send(`<html><head><title>Add Product Details</title></head><body><form action="/product" method="POST"><input type="text" name="product"></input><br><br><input type="text" name="productSize"></input><br><br><button type="submit">Add Product</button></form></body></html>`)
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

app.use('/', (req, res, next) => {
    console.log('Hello')
    res.send('<h1> Hello!!! </h1>')
});

app.listen(4000);