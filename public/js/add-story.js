const handleAddStory = async (event) => {
    
    event.preventDefault();

    // Assign the inputted values to a variable
    const nameInput = document.querySelector('#name-input').value.trim();
    const worldInput = document.querySelector('#world-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();
    const villainInput = document.querySelector('#villain-input').value.trim();
    const factionsInput = document.querySelector('#faction-input').value.trim();
    const levelInput = document.querySelector('#levels-input').value.trim();

    // If all fields are filled out, run this code
    if (nameInput && worldInput && descriptionInput &&
        villainInput && factionsInput && levelInput
    ) {
        // Send the variables to the api
        const response = await fetch('/api/stories', {
            method: 'POST',
            body: JSON.stringify({ 
                nameInput,
                worldInput,
                descriptionInput,
                villainInput,
                factionsInput,
                levelInput
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
}

// Add click event
document.querySelector('#submit-story').addEventListener('click', handleAddStory);