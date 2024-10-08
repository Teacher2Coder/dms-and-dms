const router = require('express').Router();
const Story = require('../models/Stories');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/characters
router.get('/', async (req, res) => {
    try {
        const storiesData = await Story.findAll({
            order: [['id', 'DESC']]
        });

        const storiesDataPlain = storiesData.map((story) => story.get({ plain: true }));
        
        res.render('stories', { storiesDataPlain })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/characters/1
router.get('/:id', async (req, res) => {
    try {
        const singleStoryData = await Story.findByPk(req.params.id);

        const story = singleStoryData.get({ plain: true });
        
        res.render('single-story', { story })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;