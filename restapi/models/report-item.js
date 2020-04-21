const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const ReportItem = sequelize.define('reportItem',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  value: Sequelize.FLOAT,
  unit: Sequelize.STRING
});

module.exports = ReportItem;
