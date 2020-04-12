const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const Status = sequelize.define('status', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull:false,
  }
});

module.exports = Status;
