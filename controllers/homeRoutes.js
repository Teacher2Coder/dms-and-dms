const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async () => {
  try {
    const hello = 'hello'
    res.render('homepage', { hello })
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})




router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;