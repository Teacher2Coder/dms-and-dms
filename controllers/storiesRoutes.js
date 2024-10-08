const router = require('express').Router();
const Story = require('../models/Stories');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/characters
router.get('/', async (req, res) => {
    try {
        res.render('stories')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/characters/1
router.get('/:id', async (req, res) => {
    try {
        res.render('single-story')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;