const router = require('express').Router();
const Rules = require('../models/Rules');
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
router.get('/:id', async (req, res) => {
    try {
        
        // Find the single character data
        const singleRuleData = await Rules.findByPk(req.params.id);

        // Make the data plain
        const rule = singleRuleData.get({ plain: true });
        
        // Render single-rule.handlebars and pass in these variables
        res.render('single-rule', { 
            rule, 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;