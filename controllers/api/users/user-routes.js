// Call the router
const router = require("express").Router();
// Import the model
const Users = require("../../../models/User");

// URL looks like localhost:3001/api/users
router.post("/", async (req, res) => {
  try {
    // Create a new user with the data that is sent to the server
    const dbUserData = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Save the session with these values passed in
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
router.post("/login", async (req, res) => {
  try {
    // Find the user with the username from the req.body
    const userData = await Users.findOne({
      where: { username: req.body.username },
    });

    // If the user isn't found, send the error message
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    // Dehash the password in the database and compare to the inputted value
    const validPassword = await userData.checkPassword(req.body.password);

    // If the password isn't valid, send an error
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    // If the password is valid, create a session with these values
    req.session.save(() => {
      req.session.user = userData.username;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
// URL looks like localhost:3001/api/users/logout
router.post("/logout", (req, res) => {
  // If the user is logged in, destroy their session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Edit user bio
// URL looks like localhost:3001/api/users/username
router.put("/:username", async (req, res) => {
  try {
    // Update the user with the bio from the req.body
    const updatedUser = Users.update(
      {
        bio: req.body.newBio,
      },
      {
        // Update the user with the username from the req.params.username
        where: { username: req.params.username },
      }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
