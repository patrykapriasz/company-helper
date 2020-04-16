const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const Task = sequelize.define('task', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  description: Sequelize.STRING,
  timeToFinish: Sequelize.DATE
});

module.exports = Task;
