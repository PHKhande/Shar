const Sequelize = require('sequelize')

const sequelize = require('../helper/database');

const Product = sequelize.define( 'product', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;

//https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg
// const db = require('../helper/database')

// const Cart = require('./cart');

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute('INSERT INTO products ( title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
//      [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   static deleteById(id) {
//     console.log(id)
//     return db.execute('DELETE FROM products WHERE products.id = ?', [id])
//   }

//   static fetchAll() {
//     return db.execute('SELECT * FROM products');
//   }

//   static findById(id) {
//     return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
//   }
// };
