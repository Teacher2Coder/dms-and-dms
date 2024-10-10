document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dice-button').addEventListener('click', function () {
        const roll = _.random(1, 20); // Lodash - select integer between 1 and 20 
        alert(`You rolled a ${roll}!`);
    });

    document.getElementById('6-button').addEventListener('click', function () {
        const roll = _.random(1, 6); // Lodash - select integer between 1 and 6 
        alert(`You rolled a ${roll}!`);
    });

    document.getElementById('8-button').addEventListener('click', function () {
        const roll = _.random(1, 8); // Lodash - select integer between 1 and 8 
        alert(`You rolled a ${roll}!`);
    });

    document.getElementById('12-button').addEventListener('click', function () {
        const roll = _.random(1, 12); // Lodash - select integer between 1 and 12 
        alert(`You rolled a ${roll}!`);
    });

    document.getElementById('4-button').addEventListener('click', function () {
        const options = [124, 132, 143, 234];
        const roll = _.sample(options); // Lodash - select a side of the 4 sided die
        alert(`You rolled a ${roll}!`);
    });
});