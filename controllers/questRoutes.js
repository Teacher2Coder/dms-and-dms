// Call the router
const router = require('express').Router();

// Import the models
const Quest = require('../models/Quest');
const Comments = require('../models/Comment');

// Import authorization helper
const withAuth = require('../utils/auth');

// URL looks like localhost:3001/quests
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

// URL looks like localhost.3001/quests/1
router.get('/:id', withAuth, async (req, res) => {
    try {
        // Get the single quest data
        const singleQuestData = await Quest.findByPk(req.params.id);

        // Find the comments on this particular quest
        const commentData = await Comments.findAll({ 
            where: { for: 'quests', category_id: req.params.id }
        });

        // Make the data plain
        const quest = singleQuestData.get({ plain: true });
        const comments = commentData.map((comment) => comment.get({ plain: true }));

        // Determine if the user can edit the quest
        const canEdit = req.session.user == quest.author;
        
        // Render single-character.handlebars and pass in these variables
        res.render('single-quest', { 
            quest,
            comments, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user,
            canEdit 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;