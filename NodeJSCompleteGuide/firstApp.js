const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./helper/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const userRoutes = require('./routes/user');
const errorRoute = require('./routes/error');
// const expenseRoutes = require('./routes/expenseRoute');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use( (req, res, next) => {
    User.findByPk(1)
        .then( user => {
            req.user = user;
            next();
        })
        .catch( err => { console.log(err)})
})

app.use('/admin', adminRoutes);
app.use(shopRoutes); 
app.use(errorRoute);

Product.belongsTo(User, { constraints: true, onDelete:'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
// app.use('/', userRoutes);

// app.use('/', expenseRoutes);

sequelize
    // .sync({force: true})
    .sync()
    .then( result => {
        return User.findByPk(1);
    })
    .then( user => {
        if(!user){
            return User.create({ name: 'Prathvi', email: 'phk151raj@gmail.com', phnnumber: '9741175504'})
        } else{
            return user; //Promise.resolve(user) In above line we are returning promise and we need to return promise from here also, but when returning from .then, it turns all objects into promises so its okay
        }
    })
    .then(user => {
        // console.log(user);
        return user.createCart();
    })
    .then( user => {
        // console.log(user);
        app.listen(4000)
    })
    .catch( err => { console.log(err)})

