require('dotenv').config({ path: './.env' }); // Ensure correct path
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'postgres', // Default to 'postgres'
    logging: false, // Disable logging to clean up console output
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? { require: true, rejectUnauthorized: false } : false,
    },
  }
);

// Load models
const models = {
  Trainer: require('./Trainer')(sequelize, DataTypes),
  Pokemon: require('./Pokemon')(sequelize, DataTypes),
};

// Set up associations if they exist
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

module.exports = models;