const Sequelize = require('sequelize');

const sequelize = require('../dbcontext/database');

const sampleSource = sequelize.define('sample_source',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allownull: false,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  content: Sequelize.STRING
});

module.exports = sampleSource;
