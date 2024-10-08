const router = require('express').Router();
const Character = require('../models/Characters');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/characters
router.get('/', async (req, res) => {
    try {
        const characterData = await Character.findAll({
            order: [['id', 'DESC']]
        });

        const characterDataPlain = characterData.map((characters) => characters.get({ plain: true }));
        
        res.render('characters', { characterDataPlain, loggedIn: req.session.loggedIn })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/characters/1
router.get('/:id', async (req, res) => {
    try {
        const singleCharacterData = await Character.findByPk(req.params.id);

        const character = singleCharacterData.get({ plain: true });
        
        res.render('single-character', { character, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;