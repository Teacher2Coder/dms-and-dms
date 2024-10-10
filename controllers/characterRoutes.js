const router = require('express').Router();
const Character = require('../models/Characters');
const Comments = require('../models/Comment');
const withAuth = require('../utils/auth');

// URL looks like this: localhost:3001/characters
router.get('/', async (req, res) => {
    try {
        
        // Get all the characters from all users in reverse order
        const characterData = await Character.findAll({
            order: [['id', 'DESC']]
        });
        
        // Make the data plain
        const characterDataPlain = characterData.map((characters) => characters.get({ plain: true }));
        
        // Render characters.handlebars and pass in these variables
        res.render('characters', { 
            characterDataPlain, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// URL looks like this: localhost:3001/characters/1
router.get('/:id', withAuth, async (req, res) => {
    try {
        
        // Find the single character data
        const singleCharacterData = await Character.findByPk(req.params.id);

        // Find the comments on this particular character
        const commentData = await Comments.findAll({ where: { for: 'characters', category_id: req.params.id }})
        
        // Make the data plain
        const character = singleCharacterData.get({ plain: true });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        
        // Determine if the user can edit the character
        const canEdit = req.session.user == character.author;

        // Render single-character.handlebars and pass in these variables
        res.render('single-character', { 
            character, 
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