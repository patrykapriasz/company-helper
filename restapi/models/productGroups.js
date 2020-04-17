const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const RawMaterial = sequelize.define('productGroup',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: Sequelize.STRING
});

module.exports = RawMaterial;
