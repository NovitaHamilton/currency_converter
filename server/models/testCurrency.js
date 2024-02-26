const { sequelize } = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');

// Define Currency Model
class testCurrency extends Model {}

testCurrency.init(
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
    modelName: 'testCurrency',
  }
);

module.exports = testCurrency;
