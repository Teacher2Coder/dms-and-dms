const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stories extends Model {}

Stories.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        world: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        questGiver: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        Quest_id: {
            type: Datatypes.INTEGER,
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