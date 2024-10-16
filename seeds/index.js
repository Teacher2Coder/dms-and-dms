const sequelize = require("../config/connection");
// Import models here
const Characters = require("../models/Characters");
const Quests = require("../models/Quest");
const Stories = require("../models/Stories");
const Rules = require("../models/Rules");
const User = require("../models/User");
const Comments = require("../models/Comment");

// Import json data here
const characterSeeds = require("./characterSeeds.json");
const questSeeds = require("./questSeeds.json");
const storySeeds = require("./storySeeds.json");
const ruleSeeds = require("./ruleSeeds.json");
const userSeeds = require("./userSeeds.json");
const commentSeeds = require("./commentSeeds.json");

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
    await Comments.bulkCreate(commentSeeds, {
      individualHooks: true,
      returning: true,
    });
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
