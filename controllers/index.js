const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
// const characterRoutes = require('./characterRoutes'); UNCOMMENT when ready!
const apiRoutes = require('./api');

router.use('/', homeRoutes);
// router.use('/characters', characterRoutes); UNCOMMENT when ready!
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

module.exports = router;