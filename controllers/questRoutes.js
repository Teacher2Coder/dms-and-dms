const router = require('express').Router();
const Quest = require('../models/Quest');
const withAuth = require('../utils/auth');

// URL looks like this: localhost:3001/quests
router.get('/', async (req, res) => {
    try {
        
        // Get all of the quest data
        const questData = await Quest.findAll({
            order: [['id', 'DESC']]
        });
        
        // Make the data plain
        const questDataPlain = questData.map((quest) => quest.get({ plain: true }));
        
        // Render quests.handlebars and pass in these variables
        res.render('quests', { 
            questDataPlain, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        })

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/quests/1
router.get('/:id', async (req, res) => {
    try {
        // Get the single quest data
        const singleQuestData = await Quest.findByPk(req.params.id);

        // Make the data plain
        const quest = singleQuestData.get({ plain: true });
        
        // Render single-character.handlebars and pass in these variables
        res.render('single-quest', { 
            quest, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;