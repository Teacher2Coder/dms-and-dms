const Characters = require ('./Characters');
const Rules = require ('./Rules');
const Stories = require ('./Stories');
const Objective = require ('./Objective');
const Class = require ('./Class');

Stories.hasOne(Objective, {
    foriegnKey: 'stories_id',
    onDelete: 'CASCADE',
});

Objective.belongsTo(Stories, {
    foreignKey: 'stories_id',
    onDelete: 'CASCADE',
})

Characters.hasOne(Class, {
    foriegnKey: 'stories_id',
    onDelete: 'CASCADE',
});

Class.belongsTo(Characters, {
    foreignKey: 'stories_id',
    onDelete: 'CASCADE',
})