const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./helper/database')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const contactRoute = require('./routes/contactus');
// const successfulRoute = require('./routes/success');
const errorRoute = require('./routes/error')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes); 
// app.use(contactRoute);
// app.use(successfulRoute);
app.use(errorRoute);

app.listen(4000);

// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorRoute = require('./routes/error')

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorRoute);

// app.listen(3000);
