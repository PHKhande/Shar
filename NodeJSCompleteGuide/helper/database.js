const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete', 
    'root',
    'Behungry@15',
    {
        dialect : 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;