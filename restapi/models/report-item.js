const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const ReportItem = sequelize.define('reportItem',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: Sequelize.STRING,
  value: Sequelize.FLOAT,
  unit: Sequelize.STRING
});

module.exports = ReportItem;
