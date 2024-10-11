const handleAddRule = async (event) => {
    
    event.preventDefault();

    const titleInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();

    const response = await fetch('/api/rules', {
        method: 'POST',
        body: JSON.stringify({ 
            titleInput, 
            descriptionInput
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to create new character!');
    }
}

document.querySelector('#submit-rule').addEventListener('click', handleAddRule);