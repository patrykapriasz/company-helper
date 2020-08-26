const Sequalize = require('sequelize');

const sequalize = require('../../dbcontext/database');

const DeliveryHasReport = sequalize.define('delivery_has_report', {
  id: {
    type: Sequalize.INTEGER,
    primary: true,
    autoIncrement: true,
    allowNull: false
  }
});

module.exports = DeliveryHasReport;
