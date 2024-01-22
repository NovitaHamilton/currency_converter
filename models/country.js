const { sequelize } = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');

// Define Country Model
class Country extends Model {}
Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: false, //  This determines the naming convention for automatically-added fields (like foreign keys and timestamps) to 'camelCase' instead of 'snake_case'
    timestamps: false, // This automatically adds createdAt and updatedAt fields
    modelName: 'Country',
  }
);

module.exports = Country;
