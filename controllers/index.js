const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const characterRoutes = require('./characterRoutes');
const storiesRoutes = require('./storiesRoutes');
const questRoutes = require('./questRoutes');
const rulesRoutes = require('./rulesRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/characters', characterRoutes);
router.use('/stories', storiesRoutes);
router.use('/quests', questRoutes);
router.use('/rules', rulesRoutes);
router.use('/api', apiRoutes);

router.get('/about', async (req, res) => {
    try {
        res.render('about')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/contact', async (req, res) => {
    try {
        res.render('contact')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
router.get('/dice', async (req, res) => {
    try {
        res.render('dice')
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;