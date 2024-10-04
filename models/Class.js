const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class extends Model { }

Class.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        barbarian: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        bard: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        cleric: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        druid: {
            types: DataTypes.STRING,
            allowNukk: false,
        },
        fighter: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        monk: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        paladin: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        ranger: {
            types: DataTypes.STRING,
            allowNukk: false,
        },
        rogue: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        sorcerer: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        warlock: {
            types: DataTypes.STRING,
            allowNull: false,
        },
        wizard: {
            types: DataTypes.STRING,
            allowNukk: false,
        },
        artificer: {
            types: DataTypes.STRING,
            allowNukk: false,
        },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'characters',
        key: 'id',
      },
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'class',
      }
)

module.exports = Class