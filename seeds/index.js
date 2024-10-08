const sequelize = require('../config/connection');
// Import models here
const Characters = require('../models/Characters');
const Quests = require('../models/Quest');
const Stories = require('../models/Stories');
const Rules = require('../models/Rules');
const User = require('../models/User');

// Import json data here
// Uncomment the models when they are finshed and ready to go!
const characterSeeds = require('./characterSeeds.json');
const questSeeds = require('./questSeeds.json');
const storySeeds = require('./storySeeds.json');
const ruleSeeds = require('./ruleSeeds.json');
const userSeeds = require('./userSeeds.json');


// Uncomment bulkCreate methods when the seed.json files are finished and ready to go!
const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userSeeds);
        await Characters.bulkCreate(characterSeeds);
        await Quests.bulkCreate(questSeeds);
        await Stories.bulkCreate(storySeeds);
        await Rules.bulkCreate(ruleSeeds);
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

seedDatabase();