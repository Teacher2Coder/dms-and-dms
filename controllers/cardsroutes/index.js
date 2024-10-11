const router = require('express').Router();

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

router.use('/artifacts', artifactRoutes);
router.use('/black', blackRoutes);
router.use('/blue', blueRoutes);
router.use('/cards', cardsRoutes);
router.use('/dungeons', dungeonRoutes);
router.use('/green', greenRoutes);
router.use('/land', landRoutes);
router.use('/multicolored', multicoloredRoutes);
router.use('/red', redRoutes);
router.use('/white', whiteRoutes);

module.exports = router;