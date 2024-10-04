<<<<<<< HEAD
const User = require('./user');

module.exports = { User };
=======
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
>>>>>>> 1ba2eddd05abb81defa64b75c24f34be9d4988fc
