const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const User = sequelize.define('user',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;
