const handleAddStory = async (event) => {
    
    event.preventDefault();

    const nameInput = document.querySelector('#name-input').value.trim();
    const worldInput = document.querySelector('#world-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();
    const villainInput = document.querySelector('#villain-input').value.trim();
    const factionsInput = document.querySelector('#faction-input').value.trim();
    const levelInput = document.querySelector('#levels-input').value.trim();

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

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to create new character!');
    }
}

document.querySelector('#submit-story').addEventListener('click', handleAddStory);