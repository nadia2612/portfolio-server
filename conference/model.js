const Sequelize = require("sequelize");
const sequelize = require("../db");
const Location = require("../location/model");

const Conference = sequelize.define("conference", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  logo_url: {
    type: Sequelize.STRING(1234),
    allowNull: false
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  end_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  link: {
    type: Sequelize.STRING(1234),
    allowNull: true
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Location.hasMany(Conference);
Conference.belongsTo(Location);

module.exports = Conference;
