// Get the character id from the hidden content div
const characterId = document.querySelector('#hidden-content').dataset.key;

// Get the current data for the character
const currentName = document.querySelector('#name').textContent;
const currentDescription = document.querySelector('#description').textContent;
const currentClass = document.querySelector('#class').textContent;
const currentSkills = document.querySelector('#skills').textContent;
const currentRace = document.querySelector('#race').textContent;
const currentAlignment = document.querySelector('#alignment').textContent;
const currentStrength = document.querySelector('#strength').textContent;
const currentDexterity = document.querySelector('#dexterity').textContent;
const currentConstitution = document.querySelector('#constitution').textContent;
const currentIntellegence = document.querySelector('#intelligence').textContent;
const currentWisdom = document.querySelector('#wisdom').textContent;
const currentCharisma = document.querySelector('#charisma').textContent;

// Select the inputs
const editName = document.querySelector('#name-input');
const editDescription = document.querySelector('#description-input');
const editClass = document.querySelector('#class-input');
const editSkills = document.querySelector('#skill-input');
const editRace = document.querySelector('#race-input');
const editAlignment = document.querySelector('#alignment-input');
const editStrength = document.querySelector('#strength-input');
const editDexterity = document.querySelector('#dexterity-input');
const editConstitution = document.querySelector('#constitution-input');
const editIntellegence = document.querySelector('#intellegence-input');
const editWisdom = document.querySelector('#wisdom-input');
const editCharisma = document.querySelector('#charisma-input');

// Make the inputs equal to the current character data for easy editing
editName.value = currentName;
editDescription.value = currentDescription;
editClass.value = currentClass;
editSkills.value = currentSkills;
editRace.value = currentRace;
editAlignment.value = currentAlignment;
editStrength.value = currentStrength;
editDexterity.value = currentDexterity;
editConstitution.value = currentConstitution;
editIntellegence.value = currentIntellegence;
editWisdom.value = currentWisdom;
editCharisma.value = currentCharisma;


const handleEditCharacter = async (event) => {
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

    // Count the attribute score totals
    const pointCount = parseInt(strengthInput) + parseInt(dexterityInput) + parseInt(constitutionInput) + 
    parseInt(intelligenceInput) + parseInt(wisdomInput) + parseInt(charismaInput);

    // If all fields have been filled out, run this code
    if (nameInput && descriptionInput && classInput && 
        skillInput && raceInput && alignmentInput &&
        strengthInput && dexterityInput && constitutionInput &&
        intelligenceInput && wisdomInput && charismaInput &&
        pointCount == 75
    ) {
        // Send the new data to the api
        const response = await fetch(`/api/characters/${characterId}`, {
            method: 'PUT',
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
        })

        // If the response is ok, reload the page
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to update character');
        }
    // If pointCount less than 75, alert the user
    } else if (pointCount < 75) {
        alert(`You still have ${75 - pointCount} points to distribute for the character's attributes`)
    // If pointCount is more than 75, alert the user
    } else if (pointCount > 75) {
        alert(`Take away ${pointCount - 75} points from the character's attribute scores`)
    // If a field is left blank, alert the user
    } else {
        alert('All fields must be filled out');
    }
}

// Add click event
document.querySelector('#submit-edits').addEventListener('click', handleEditCharacter);