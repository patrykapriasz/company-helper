const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const ProductParameter = sequelize.define('productParameter', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

module.exports = ProductParameter;
