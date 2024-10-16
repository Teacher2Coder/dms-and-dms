// Import packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Call express and define the port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars
const hbs = exphbs.create({ helpers, partialsDir: path.join(__dirname, 'views/partials') });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Session configuration
const sess = {
  secret: 'Super secret stuff here',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Tell the server to use express-session
app.use(session(sess));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Point to routes directory
app.use(routes);

// Sync sequelize and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});