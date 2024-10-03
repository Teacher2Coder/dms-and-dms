const { Model, Datatypes } = require('sequelize');
const sequalize = require('../config/connection');

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
    }
);

module.exports = Rules