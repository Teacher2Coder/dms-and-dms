const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rules extends Model { }

Rules.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rules',
    }
);

module.exports = Rules