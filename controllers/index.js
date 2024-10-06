const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
// const characterRoutes = require('./characterRoutes'); UNCOMMENT when ready!
const apiRoutes = require('./api');

router.use('/', homeRoutes);
// router.use('/characters', characterRoutes); UNCOMMENT when ready!
router.use('/api', apiRoutes);

module.exports = router;