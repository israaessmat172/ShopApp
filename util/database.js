const Sequelize = require("sequelize");

const sequelize = new Sequelize("shop-app", "root", "shopapp", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
