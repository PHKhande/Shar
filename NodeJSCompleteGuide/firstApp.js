const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const messageRoutes = require('./routes/message');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(loginRoutes);
app.use(messageRoutes);

app.use('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contactus.html'))
})

app.use('/successfull', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'successful.html'))
})

app.use( (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(4000);