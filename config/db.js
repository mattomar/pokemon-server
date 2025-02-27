const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres", // Ensure it's 'postgres'
    logging: false, // Optional: Reduce logs
    dialectOptions: {
      ssl: process.env.DB_SSL === "true" ? { require: true, rejectUnauthorized: false } : false,
    },
  }
);

const Trainer = require("./trainer")(sequelize, Sequelize.DataTypes);
const Pokemon = require("./pokemon")(sequelize, Sequelize.DataTypes);

module.exports = { sequelize, Trainer, Pokemon };