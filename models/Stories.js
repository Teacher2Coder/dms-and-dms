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
        world: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        questGiver: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Quest_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'objective',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'stories',
    }
);

module.exports = Stories