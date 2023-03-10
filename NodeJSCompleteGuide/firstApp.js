const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./helper/database');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const errorRoute = require('./routes/error');
const expenseRoutes = require('./routes/expenseRoute');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes); 
app.use(errorRoute);

app.use('/', userRoutes);

app.use('/', expenseRoutes);

sequelize
    .sync()
    .then( res => {app.listen(4000)})
    .catch( err => { console.log(err)})

