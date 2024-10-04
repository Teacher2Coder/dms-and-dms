const router = require('express').Router();
<<<<<<< HEAD
const userRoutes = require('./userRoutes');
=======

const userRoutes = require('./user-routes');
>>>>>>> 1ba2eddd05abb81defa64b75c24f34be9d4988fc

router.use('/users', userRoutes);

module.exports = router;