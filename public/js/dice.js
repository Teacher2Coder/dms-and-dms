document.addEventListener('DOMContentLoaded', function () {
    const _ = require('lodash');

    document.getElementById('dice-button').addEventListener('click', function () {
        const roll = _.random(1, 20); // Lodash - select integer between 1 and 20 
        alert(`You rolled a ${roll}!`);
    });
});