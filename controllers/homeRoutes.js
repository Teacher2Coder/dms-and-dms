const router = require('express').Router();
const Character = require('../models/Characters');
const Stories = require('../models/Stories');
const Quests = require('../models/Quest');
const Rules = require('../models/Rules');
const User = require('../models/User');
const withAuth = require('../utils/auth');


// URL looks like this: localhost.3001/
router.get('/', async (req, res) => {
  try {

    const characterData = await Character.findAll({
      order: [['id', 'DESC']]
    });
    const characterDataPlain = characterData.map((characters) => characters.get({ plain: true }));

    const firstCharacter = characterDataPlain[0];
    const secondCharacter = characterDataPlain[1];
    const thirdCharacter = characterDataPlain[2];

    const questData = await Quests.findAll({
      order: [['id', 'DESC']]
    });
    const questDataPlain = questData.map((quest) => quest.get({ plain: true }));

    const firstQuest = questDataPlain[0];
    const secondQuest = questDataPlain[1];
    const thirdQuest = questDataPlain[2];

    const storiesData = await Stories.findAll({
      order: [['id', 'DESC']]
    });
    const storiesDataPlain = storiesData.map((story) => story.get({ plain: true }));

    const firstStory = storiesDataPlain[0];
    const secondStory = storiesDataPlain[1];
    const thirdStory = storiesDataPlain[2];

    const ruleData = await Rules.findAll({
      order: [['id', 'DESC']]
    });
    const ruleDataPlain = ruleData.map((rule) => rule.get({ plain: true }));

    const firstRule = ruleDataPlain[0];
    const secondRule = ruleDataPlain[1];
    const thirdRule = ruleDataPlain[2];

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



// URL looks like this: localhost.3001/login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('register');
});
  
module.exports = router;