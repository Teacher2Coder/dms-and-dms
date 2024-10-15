const handleAddQuest = async (event) => {
    
    event.preventDefault();

    // Assign the quest inputs to a variable
    const nameInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();
    const questGiverInput = document.querySelector('#quest-giver-input').value.trim();
    const locationInput = document.querySelector('#location-input').value.trim();
    const rewardsInput = document.querySelector('#rewards-input').value.trim();

    // If all fields are filled out, run this code
    if (nameInput && descriptionInput && questGiverInput &&
        locationInput && rewardsInput
    ) {
        // Send the data to the api
        const response = await fetch('/api/quests', {
            method: 'POST',
            body: JSON.stringify({ 
                nameInput, 
                descriptionInput,
                questGiverInput,
                locationInput,
                rewardsInput
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        // If the response is ok, reload the page
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to create new character!');
        }
    } else {
        alert('All fields must be filled out');
    }
};

// Add click event
document.querySelector('#submit-quest').addEventListener('click', handleAddQuest);