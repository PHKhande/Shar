const Sequelize = require('sequelize')

const sequelize = require('../../helper/database');

const ToDo = sequelize.define( 'todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    item: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = ToDo;