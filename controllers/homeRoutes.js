const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');


// URL looks like this: localhost.3001/
router.get('/', async (req, res) => {
  try {
    res.render('homepage')
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

// URL looks like this: localhost.3001/login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});
  
module.exports = router;