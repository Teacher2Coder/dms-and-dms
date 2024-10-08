const router = require('express').Router();
const Quest = require('../models/Quest');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/quests
router.get('/', async (req, res) => {
    try {
        res.render('quests')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/quests/1
router.get('/:id', async (req, res) => {
    try {
        res.render('single-quest')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;