const router = require('express').Router();
const Users = require('../models/User');
const Characters = require('../models/Characters');
const Quests = require('../models/Quest');
const Stories = require('../models/Stories');
const Rules = require('../models/Rules');
const withAuth = require('../utils/auth');


// URL looks like this -- localhost:3001/users/username
router.get('/:username', withAuth, async (req, res) => {
    try {
        // Get user data, the user's characters, quests, stories and rules
        const userData = await Users.findOne({ where: { username: req.params.username }});
        const characterData = await Characters.findAll({ where: { author: req.params.username } });
        const questData = await Quests.findAll({ where: { author: req.params.username } });
        const storyData = await Stories.findAll({ where: { author: req.params.username } });
        const ruleData = await Rules.findAll({ where: { author: req.params.username } })

        // Make all of that data plain
        const userDataPlain = userData.get({ plain: true });
        const characterDataPlain = characterData.map((characters) => characters.get({ plain: true }));
        const questDataPlain = questData.map((characters) => characters.get({ plain: true }));
        const storyDataPlain = storyData.map((characters) => characters.get({ plain: true }));
        const ruleDataPlain = ruleData.map((characters) => characters.get({ plain: true }));

        // Determine if the user has permission to edit this information
        const canEdit = req.params.username == req.session.user;
        
        // Render user-profile.hanbdlebars and pass in these variables
        res.render('user-profile', { 
            userDataPlain,
            characterDataPlain, 
            questDataPlain, 
            storyDataPlain, 
            ruleDataPlain, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user,
            canEdit
        })

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;