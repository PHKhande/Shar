const Sequelize = require('sequelize')

const sequelize = require('../helper/database');

const Expense = sequelize.define( 'expenseTracker', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    expAmt: {
        type: Sequelize.STRING,
        allowNull: false
    },

    category: {
        type: Sequelize.STRING,
        allowNull: false
    },

    desc: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Expense;