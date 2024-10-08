const router = require('express').Router();
const Rules = require('../models/Rules');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/characters
router.get('/', async (req, res) => {
    try {
        res.render('rules')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/characters/1
router.get('/:id', async (req, res) => {
    try {
        res.render('single-rule')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;