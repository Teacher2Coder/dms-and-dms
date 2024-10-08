document.getElementById('dice-button').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    alert(`You rolled a ${randomNumber}!`);
});