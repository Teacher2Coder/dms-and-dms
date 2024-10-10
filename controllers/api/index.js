const router = require('express').Router();

// Import the routes
const userRoutes = require('./users/user-routes');
const characterRoutes = require('./characters/characters-routes');
const questRoutes = require('./quests/quest-routes');
const ruleRoutes = require('./rules/rules-routes');
const storiesRoutes = require('./stories/stories-routes');

// Middleware that points the server to the correct route
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/quests', questRoutes);
router.use('/rules', ruleRoutes);
router.use('/stories', storiesRoutes);

module.exports = router;