const router = require('express').Router();
const Character = require('../models/Characters');
const Stories = require('../models/Stories');
const Quests = require('../models/Quest');
const Rules = require('../models/Rules');
const User = require('../models/User');
const withAuth = require('../utils/auth');


// URL looks like this: localhost:3001/
router.get('/', async (req, res) => {
  try {
    // Find all the character data and put in reverse order
    const characterData = await Character.findAll({
      order: [['id', 'DESC']]
    });
    // Make the data plain
    const characterDataPlain = characterData.map((characters) => characters.get({ plain: true }));

    // Assign the first three characters to a variable
    const firstCharacter = characterDataPlain[0];
    const secondCharacter = characterDataPlain[1];
    const thirdCharacter = characterDataPlain[2];

    // Find all the quest data and put in reverse order
    const questData = await Quests.findAll({
      order: [['id', 'DESC']]
    });
    // Make the data plain
    const questDataPlain = questData.map((quest) => quest.get({ plain: true }));

    // Assign the first three quests to a variable
    const firstQuest = questDataPlain[0];
    const secondQuest = questDataPlain[1];
    const thirdQuest = questDataPlain[2];

    // Find all the story data and put in reverse order
    const storiesData = await Stories.findAll({
      order: [['id', 'DESC']]
    });
    // Make the data plain
    const storiesDataPlain = storiesData.map((story) => story.get({ plain: true }));

    // Assign the first three stories to a variable
    const firstStory = storiesDataPlain[0];
    const secondStory = storiesDataPlain[1];
    const thirdStory = storiesDataPlain[2];

    // Find all the rule data and put in reverse order
    const ruleData = await Rules.findAll({
      order: [['id', 'DESC']]
    });
    // Make the data plain
    const ruleDataPlain = ruleData.map((rule) => rule.get({ plain: true }));

    // Assign the first three rules to a variable
    const firstRule = ruleDataPlain[0];
    const secondRule = ruleDataPlain[1];
    const thirdRule = ruleDataPlain[2];

    // Render homepage.handlebars and pass in these variables
    res.render('homepage', {
      firstCharacter, secondCharacter, thirdCharacter,
      firstQuest, secondQuest, thirdQuest,
      firstStory, secondStory, thirdStory,
      firstRule, secondRule, thirdRule,
      loggedIn: req.session.loggedIn,
      user: req.session.user
     })
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



// URL looks like this: localhost:3001/login
router.get('/login', (req, res) => {
  // If the user is logged in, send them back to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // If the user is not logged in, render login.handlebars
  res.render('login');
});

router.get('/register', (req, res) => {
  // If the user is logged in, send them back to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // If the user is not logged in, render register.handlebars
  res.render('register');
});
  
module.exports = router;