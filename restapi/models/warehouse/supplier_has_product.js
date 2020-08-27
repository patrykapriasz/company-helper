const Sequelize = require('sequelize');

const sequelize = require('../../dbcontext/database');

const SupplierHasProduct = sequelize.define('supplier_has_product',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
});

module.exports = SupplierHasProduct;
