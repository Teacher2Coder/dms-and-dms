const router = require('express').Router();
const Quest = require('../models/Quest');
const withAuth = require('../utils/auth');

// URL looks like this: localhost.3001/quests
router.get('/', async (req, res) => {
    try {
        const questData = await Quest.findAll({
            order: [['id', 'DESC']]
        });

        const questDataPlain = questData.map((quest) => quest.get({ plain: true }));
        
        res.render('quests', { questDataPlain, loggedIn: req.session.loggedIn, user: req.session.user })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like this: localhost.3001/quests/1
router.get('/:id', async (req, res) => {
    try {
        const singleQuestData = await Quest.findByPk(req.params.id);

        const quest = singleQuestData.get({ plain: true });
        
        res.render('single-quest', { quest, loggedIn: req.session.loggedIn, user: req.session.user })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;