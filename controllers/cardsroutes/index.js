const router = require('express').Router();

const artifactRoutes = require('./artifactRoutes');
const blackRoutes = require('./blackRoutes');
const blueRoutes = require('./blueRoutes');
const dungeonRoutes = require('./dungeonRoutes');
const greenRoutes= require('./greenRoutes');
const landRoutes = require('./landRoutes');
const multicoloredRoutes= require('./multicoloredRoutes');
const redRoutes = require('./redRoutes');
const whiteRoutes = require('./whiteRoutes');

router.use('/artifacts', artifactRoutes);
router.use('/black', blackRoutes);
router.use('/blue', blueRoutes);
router.use('/dungeons', dungeonRoutes);
router.use('/green', greenRoutes);
router.use('/land', landRoutes);
router.use('/multicolored', multicoloredRoutes);
router.use('/red', redRoutes);
router.use('/white', whiteRoutes);

// URL looks like localhost:3001/cards
router.get('/', async (req, res) => {
    try {
        // Render about.handlebars and pass in variables
        res.render('cards', { 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;