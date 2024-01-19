const { sequelize } = require('../config/sequelize');
const { DataTypes, Model, DataTypes } = require('sequelize');

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
      type: DataTypes.INTEGER,
      primaryKEY: false,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: false,
    timestamps: true,
    modelName: 'Currency',
  }
);

model.exports = Currency;
