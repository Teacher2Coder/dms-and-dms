const router = require('express').Router();
const Users = require('../../../models/User');

// URL looks like this: localhost.3001/api/users
router.post('/', async (req, res) => {
  try {
    const dbUserData = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  
    req.session.save(() => {
      req.session.loggedIn = true;

      req.session.user = dbUserData.username;
  
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
// URL looks like localhost:3001/api/users/login
router.post('/login', async (req, res) => {
  try {
    console.log("These are the inputed values");
    console.log(req.body.username);
    console.log(req.body.password);
    
    const userData = await Users.findOne({ where: { username: req.body.username } });

    console.log("These are the database values");
    console.log(userData.username);
    console.log(userData.password);

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    console.log("Do the passwords match?")
    console.log(validPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user = userData.username;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
  
// Logout
// URL looks like this localhost:3001/api/users/logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;