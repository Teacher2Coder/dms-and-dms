const router = require('express').Router();
const Rules = require('../models/Rules');
const Comments = require('../models/Comment');
const withAuth = require('../utils/auth');

// URL looks like this: localhost:3001/characters
router.get('/', async (req, res) => {
    try {
        // find all of the rule data
        const rulesData = await Rules.findAll({
            order: [['id', 'DESC']]
        });

        // Make the data plain
        const rulesDataPlain = rulesData.map((rules) => rules.get({ plain: true }));
        
        // Render rules.handlebars and pass in these variables
        res.render('rules', { 
            rulesDataPlain, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/characters/1
router.get('/:id', withAuth, async (req, res) => {
    try {
        
        // Find the single character data
        const singleRuleData = await Rules.findByPk(req.params.id);

        // Find the comments on this particular rule
        const commentData = await Comments.findAll({ where: { for: 'rule', category_id: req.params.id }})

        // Make the data plain
        const rule = singleRuleData.get({ plain: true });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        
        // Render single-rule.handlebars and pass in these variables
        res.render('single-rule', { 
            rule,
            comments, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;