const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const ProductGroup = require('../models/productGroups');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  symbol: Sequelize.STRING
})

module.exports = Product;
