const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const warehouse = sequelize.define('warehouse',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allownull: false,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  symbol: Sequelize.STRING
});

module.exports = warehouse;
