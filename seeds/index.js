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

        await User.bulkCreate(userSeeds, {
            individualHooks: true,
            returning: true,
        });
        await Characters.bulkCreate(characterSeeds, {
            individualHooks: true,
            returning: true,
        });
        await Quests.bulkCreate(questSeeds, {
            individualHooks: true,
            returning: true,
        });
        await Stories.bulkCreate(storySeeds, {
            individualHooks: true,
            returning: true,
        });
        await Rules.bulkCreate(ruleSeeds, {
            individualHooks: true,
            returning: true,
        });
    } catch (err) {
        console.error(err);
    } finally {
        process.exit(0);
    }
}

seedDatabase();