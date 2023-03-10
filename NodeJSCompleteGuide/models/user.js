const Sequelize = require('sequelize')

const sequelize = require('../helper/database');

const User = sequelize.define( 'bkappuser', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    phnnumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = User;