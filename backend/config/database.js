const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'inventorysystem',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'ngochecktong',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  }
);

module.exports = sequelize;