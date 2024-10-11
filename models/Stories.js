const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stories extends Model {}

Stories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    world: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    main_villain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    potential_factions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    levels: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stories',
  }
);

module.exports = Stories;