const sequelize = require('../config/connection');
const { Character } = require('../models');

const characterData = [
    {
        name: 
        class: 
        skills: 
        alignment: 
        strength: 
        intelligence: 
        
    },
    {
        name:
        class: 
        skills: 
        alignment: 
        strength: 
        intelligence: 
    
    }
];
// function to seed characters into the db 
const seedCharacters = async () => {
    await sequelize.sync({force: true }); // reset the db
console.log('\n----- Seeding Characters -----\n');

// to insert the character data into the db
await Character.bulkCreate(characterData, {
    individualHooks: true,
        returning: true,
});

console.log('\n----- Seeding Characters -----\n'); //logging success message 

}; 
//call the seedCharacters functions and handle any errors
seedCharacters().catch(err =>{
    console.log(err);
    process.exit(1);
});