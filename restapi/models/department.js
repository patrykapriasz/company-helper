const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const Department = sequelize.define('department',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Department;
