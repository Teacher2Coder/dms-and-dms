const handleAddQuest = async (event) => {
    
    event.preventDefault();

    const nameInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();
    const questGiverInput = document.querySelector('#quest-giver-input').value.trim();
    const locationInput = document.querySelector('#location-input').value.trim();
    const rewardsInput = document.querySelector('#rewards-input').value.trim();

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

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to create new character!');
    }
}

document.querySelector('#submit-quest').addEventListener('click', handleAddQuest);