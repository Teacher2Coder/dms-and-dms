const storyId = document.querySelector('#hidden-content').dataset.key;

const currentName = document.querySelector('#name').textContent;
const currentDescription = document.querySelector('#description').textContent;
const currentWorld = document.querySelector('#world').textContent;
const currentVillain = document.querySelector('#villain').textContent;
const currentFactions = document.querySelector('#factions').textContent;
const currentLevels = document.querySelector('#levels').textContent;

const editName = document.querySelector('#name-input');
const editDescription = document.querySelector('#description-input');
const editWorld = document.querySelector('#world-input');
const editVillain = document.querySelector('#villain-input');
const editFaction = document.querySelector('#faction-input');
const editLevels = document.querySelector('#levels-input');

editName.value = currentName;
editDescription.value = currentDescription;
editWorld.value = currentWorld;
editVillain.value = currentVillain;
editFaction.value = currentFactions;
editLevels.value = currentLevels;

const handleEditStory = async (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();
    const worldInput = document.querySelector('#world-input').value.trim();
    const villainInput = document.querySelector('#villain-input').value.trim();
    const factionInput = document.querySelector('#faction-input').value.trim();
    const levelsInput = document.querySelector('#levels-input').value.trim();

    const response = await fetch(`/api/stories/${storyId}`, {
        method: 'PUT',
        body: JSON.stringify({
            nameInput,
            descriptionInput,
            worldInput,
            villainInput,
            factionInput,
            levelsInput
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to update story')
    }
}

document.querySelector('#submit-edits').addEventListener('click', handleEditStory);