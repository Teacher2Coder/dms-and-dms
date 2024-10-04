const sequelize = require('../config/connection');
const Stories = require('../models/Stories'); // Adjust the path as necessary
const storiesData = require('./storiesSeeds.json'); // Adjust the path as necessary

const seedStories = async () => {
    await sequelize.sync({ force: true }); // This will drop the table and recreate it

    // Insert the seed data
    await Stories.bulkCreate(storiesData);

    console.log('Stories seeded successfully!');
    process.exit(0); // Exit the process
};

seedStories().catch(err => {
    console.error('Error seeding stories:', err);
    process.exit(1); // Exit the process with an error
});