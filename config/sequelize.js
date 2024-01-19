require('dotenv').config();

const { Sequelize } = require('sequelize');
const pg = require('pg');

// External Database URL (from Render)
const databaseURL = process.env.DB_URL;

// Sequalize intialization to connect to database, second argument is additional configuration object
const sequelize = new Sequelize(databaseURL, {
  dialectModule: pg, // tells Sequelize to use PostgreSQL as the database.
  dialectOptions: {
    ssl: {
      require: true, // tells Sequelize to always use SSL (Security Sockets Layer) when connecting to the database
      rejectUnauthorized: false,
    },
  },
});

// To authenticate connection
const authenticateConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection with database has been established successfully.');
  } catch (error) {
    console.log('Unable to connect to database...', error);
  }
};

module.exports = { sequelize, authenticateConnection };
