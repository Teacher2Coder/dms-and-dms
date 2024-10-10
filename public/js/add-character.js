const handleAddCharacter = async (event) => {
    
    event.preventDefault();

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
    })

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to create new character!');
    }
}

document.querySelector('#submit-character').addEventListener('click', handleAddCharacter);