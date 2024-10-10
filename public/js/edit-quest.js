const questId = document.querySelector('#hidden-content').dataset.key;

const currentName = document.querySelector('#name').textContent;
const currentDescription = document.querySelector('#description').textContent;
const currentQuestGiver = document.querySelector('#quest-giver').textContent;
const currentLocation = document.querySelector('#location').textContent;
const currentRewards = document.querySelector('#rewards').textContent;

const editName = document.querySelector('#name-input');
const editDescription = document.querySelector('#description-input');
const editQuestGiver = document.querySelector('#quest-giver-input');
const editLocation = document.querySelector('#location-input');
const editRewards = document.querySelector('#rewards-input');

editName.value = currentName;
editDescription.value = currentDescription;
editQuestGiver.value = currentQuestGiver;
editLocation.value = currentLocation;
editRewards.value = currentRewards;

const handleEditQuest = async (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();
    const questGiverInput = document.querySelector('#quest-giver-input').value.trim();
    const locationInput = document.querySelector('#location-input').value.trim();
    const rewardsInput = document.querySelector('#rewards-input').value.trim();

    const response = await fetch(`/api/quests/${questId}`, {
        method: 'PUT',
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
        alert('Failed to update quest')
    }
}

document.querySelector('#submit-edits').addEventListener('click', handleEditQuest);