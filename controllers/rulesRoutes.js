const router = require('express').Router();

// URL: localhost:3001/artifacts
router.get('/', (req, res) => {
    try {
        // Render artifact.handlebars and pass any necessary variables
        res.render('artifact', { 
            loggedIn: req.session.loggedIn, 
            user: req.session.user 
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
