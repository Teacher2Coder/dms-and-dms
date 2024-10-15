// Set all attributes to 8 at the start
document.querySelector('#strength-input').value = 8;
document.querySelector('#dexterity-input').value = 8;
document.querySelector('#constitution-input').value = 8;
document.querySelector('#intellegence-input').value = 8;
document.querySelector('#wisdom-input').value = 8;
document.querySelector('#charisma-input').value = 8;

const handleAddCharacter = async (event) => {
    
    event.preventDefault();

    // Assign the inputted values to a variable
    const nameInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();
    const classInput = document.querySelector('#class-input').value.trim();
    const skillInput = document.querySelector('#skill-input').value.trim();
    const raceInput = document.querySelector('#race-input').value.trim();
    const alignmentInput = document.querySelector('#alignment-input').value.trim();
    const strengthInput = document.querySelector('#strength-input').value.trim();
    const dexterityInput = document.querySelector('#dexterity-input').value.trim();
    const constitutionInput = document.querySelector('#constitution-input').value.trim();
    const intelligenceInput = document.querySelector('#intellegence-input').value.trim();
    const wisdomInput = document.querySelector('#wisdom-input').value.trim();
    const charismaInput = document.querySelector('#charisma-input').value.trim();

    // Count the atribute score totals
    const pointCount = parseInt(strengthInput) + parseInt(dexterityInput) + parseInt(constitutionInput) + 
    parseInt(intelligenceInput) + parseInt(wisdomInput) + parseInt(charismaInput);

    console.log(pointCount);

    // If all fields are filled out and the point total is 75, run this code
    if (nameInput && descriptionInput && classInput &&
        skillInput && raceInput && alignmentInput &&
        strengthInput && dexterityInput && constitutionInput &&
        intelligenceInput && wisdomInput && charismaInput &&
        pointCount == 75
    ) {
        // Send the values to the api
        const response = await fetch('/api/characters', {
            method: 'POST',
            body: JSON.stringify({ 
                nameInput, 
                descriptionInput, 
                classInput,
                skillInput,
                raceInput,
                alignmentInput,
                strengthInput,
                dexterityInput,
                constitutionInput,
                intelligenceInput,
                wisdomInput,
                charismaInput
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // If the response is ok, reload the page
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to create new character!');
        }
    // If pointCount less than 75, alert the user
    } else if (pointCount < 75) {
        alert(`You still have ${75 - pointCount} points to distribute for the character's attributes`)
    // If pointCount is more than 75, alert the user
    } else if (pointCount > 75) {
        alert(`Take away ${pointCount - 75} points from the character's attribute scores`)
    } else {
    // If a field is left blank, alert the user
        alert('All fields must be filled out');
    }
};

// Add click events
document.querySelector('#submit-character').addEventListener('click', handleAddCharacter);