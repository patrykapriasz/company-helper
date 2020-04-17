const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const User = require('../models/user');
const Product = require('../models/product');

const Report = sequelize.define('report',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  description: Sequelize.STRING
});

module.exports = Report;
