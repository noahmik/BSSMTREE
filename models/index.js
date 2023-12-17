const Sequelize = require("sequelize");
const Letter = require("./letter");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.Letter = Letter;

Letter.initiate(sequelize);

Letter.associate(db);

module.exports = db;