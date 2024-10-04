const sequelize = require('../config/connection');
const Objective = require('../models/Objective'); // Adjust the path as necessary
const objectiveData = require('./objectiveSeeds.json'); // Adjust the path as necessary

const seedObjectives = async () => {
    await sequelize.sync({ force: true }); // This will drop the table and recreate it

    // Insert the seed data
    await Objective.bulkCreate(objectiveData);

    console.log('Objectives seeded successfully!');
    process.exit(0); // Exit the process
};

seedObjectives().catch(err => {
    console.error('Error seeding objectives:', err);
    process.exit(1); // Exit the process with an error
});