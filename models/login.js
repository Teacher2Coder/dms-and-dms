const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

// Connect to your MongoDB database (adjust the URI as needed)
mongoose.connect('mongodb://localhost:27017/yourdbname', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a User schema
const UserSchema = new mongoose.Schema({
    username: String,
    passwordHash: String,
});

const User = mongoose.model('User', UserSchema);

const app = express();

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Use body-parser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Fetch user from the database
    const user = await User.findOne({ username });

    // Check if user exists and compare password
    if (!user || !await bcrypt.compare(password, user.passwordHash)) {
        res.render('login', { error: 'Invalid username or password' });
    } else {
        // Redirect to the main page or dashboard
        res.redirect('/dashboard');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});