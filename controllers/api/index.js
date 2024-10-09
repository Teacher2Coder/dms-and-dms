const router = require('express').Router();

// Import the routes
const userRoutes = require('./users/user-routes');

// Middleware that points the server to the correct route
router.use('/users', userRoutes);

module.exports = router;