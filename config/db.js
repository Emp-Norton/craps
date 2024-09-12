const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite', // or 'postgres' or 'mysql'
  storage: 'database.sqlite', // SQLite file path
  logging: false, // Set to true for debugging
});

module.exports = sequelize;
