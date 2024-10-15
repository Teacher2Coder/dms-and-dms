// If a user who isn't logged in tries to access something they
// don't have access to, they are redirected to the login page
const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;