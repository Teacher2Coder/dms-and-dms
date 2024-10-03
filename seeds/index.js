const sequelize = require('../config/connection');
// Import models here

// Import json data here

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Bulk create the models


    process.exit(0);
}

seedDatabase();