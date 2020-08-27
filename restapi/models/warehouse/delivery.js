const Sequelize = require('sequelize');

const sequelize = require('../../dbcontext/database');

const Delivery = sequelize.define('delivery',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Delivery;
