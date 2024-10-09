const router = require('express').Router();
const Story = require('../models/Stories');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/characters
router.get('/', async (req, res) => {
    try {
        
        // Get all the stories from all users in reverse order
        const storiesData = await Story.findAll({
            order: [['id', 'DESC']]
        });

        // Make the data plain
        const storiesDataPlain = storiesData.map((story) => story.get({ plain: true }));
        
        // Render stories.handlebars and pass in these variables
        res.render('stories', { 
            storiesDataPlain, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/characters/1
router.get('/:id', async (req, res) => {
    try {
        // Get the single story data
        const singleStoryData = await Story.findByPk(req.params.id);

        // Make the data plain
        const story = singleStoryData.get({ plain: true });
        
        // Render single-story.handlebars and pass in these variables
        res.render('single-story', { 
            story, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;