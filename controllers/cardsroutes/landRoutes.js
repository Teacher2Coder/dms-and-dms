// Call the router
const router = require('express').Router();

// URL looks like this: localhost:3001/artifacts
router.get('/', (req, res) => {
  try {
    // Render artifact.handlebars and pass any necessary variables
    res.render('land', {
      loggedIn: req.session.loggedIn,
      user: req.session.user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;