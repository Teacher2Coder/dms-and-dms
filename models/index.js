const Characters = require ('./Characters');
const Rules = require ('./Rules');
const Stories = require ('./Stories');
const Quests = require ('./Quest');
const Class = require ('./Class');
const User = require('./user');
const Comments = require('./Comment')


// Stories.hasOne(Objective, {
//     foriegnKey: 'stories_id',
//     onDelete: 'CASCADE',
// });

// Objective.belongsTo(Stories, {
//     foreignKey: 'stories_id',
//     onDelete: 'CASCADE',
// })

// Characters.hasOne(Class, {
//     foriegnKey: 'stories_id',
//     onDelete: 'CASCADE',
// });

// Class.belongsTo(Characters, {
//     foreignKey: 'stories_id',
//     onDelete: 'CASCADE',
// })

module.exports = {Characters, Rules, Stories, Quests, Class, User, Comments};
