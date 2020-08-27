const Sequelize = require('sequelize');

const sequelize = require('../../dbcontext/database');

const Supplier = sequelize.define('supplier', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Supplier;
