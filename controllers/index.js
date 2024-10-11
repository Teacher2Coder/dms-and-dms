const router = require('express').Router();

// import the routes
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const storiesRoutes = require('./storiesRoutes');
const questRoutes = require('./questRoutes');
const rulesRoutes = require('./rulesRoutes');
const apiRoutes = require('./api');
const artifactRoutes = require('./cardsroutes/artifactRoutes');
const blackRoutes = require('./cardsroutes/blackRoutes');
const blueRoutes = require('./cardsroutes/blueRoutes');
const cardsRoutes = require('./cardsroutes/cardsRoutes');
const dungeonRoutes = require('./cardsroutes/dungeonRoutes');
const greenRoutes= require('./cardsroutes/greenRoutes');
const landRoutes = require('./cardsroutes/landRoutes');
const multicoloredRoutes= require('./cardsroutes/multicoloredRoutes');
const redRoutes = require('./cardsroutes/redRoutes');
const whiteRoutes = require('./cardsroutes/whiteRoutes');


// Middleware pointing to the routes the server needs to take
router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/stories', storiesRoutes);
router.use('/quests', questRoutes);
router.use('/rules', rulesRoutes);
router.use('/api', apiRoutes);

// URL looks like localhost:3001/about
router.get('/about', async (req, res) => {
    try {
        // Render about.handlebars and pass in variables
        res.render('about', { loggedIn: req.session.loggedIn, user: req.session.user })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like localhost:3001/contact
router.get('/contact', async (req, res) => {
    try {
        // Render contact.handlebars and pass in variables
        res.render('contact', { loggedIn: req.session.loggedIn, user: req.session.user })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// URL looks like localhost:3001/dice
router.get('/dice', async (req, res) => {
    try {
        // Render dice.handlebars and pass in variables
        res.render('dice', { loggedIn: req.session.loggedIn, user: req.session.user })
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;