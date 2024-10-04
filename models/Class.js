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
            type: DataTypes.STRING,
            allowNull: false,
        },
        bard: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cleric: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        druid: {
            type: DataTypes.STRING,
            allowNukk: false,
        },
        fighter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        monk: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paladin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ranger: {
            type: DataTypes.STRING,
            allowNukk: false,
        },
        rogue: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sorcerer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        warlock: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wizard: {
            type: DataTypes.STRING,
            allowNukk: false,
        },
        artificer: {
            type: DataTypes.STRING,
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