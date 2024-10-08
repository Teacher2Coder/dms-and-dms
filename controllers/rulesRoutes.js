const router = require('express').Router();
const Rules = require('../models/Rules');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/characters
router.get('/', async (req, res) => {
    try {
        const rulesData = await Rules.findAll({
            order: [['id', 'DESC']]
        });

        const rulesDataPlain = rulesData.map((rules) => rules.get({ plain: true }));
        
        res.render('rules', { rulesDataPlain })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/characters/1
router.get('/:id', async (req, res) => {
    try {
        const singleRuleData = await Rules.findByPk(req.params.id);

        const rule = singleRuleData.get({ plain: true });
        
        res.render('single-rule', { rule })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;