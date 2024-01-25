const { sequelize } = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');
const Country = require('./country');

// Define Currency Model
class Currency extends Model {}

Currency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    currencyCode: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER,
      references: {
        model: Country,
        key: 'id',
      },
    },
    conversionRate: {
      type: DataTypes.FLOAT,
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: false, //  This determines the naming convention for automatically-added fields (like foreign keys and timestamps) to 'camelCase' instead of 'snake_case'
    timestamps: true, // This automatically adds createdAt and updatedAt fields
    modelName: 'Currency',
  }
);

module.exports = Currency;
