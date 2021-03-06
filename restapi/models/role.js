const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const Role = sequelize.define('role', {
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

module.exports = Role;
