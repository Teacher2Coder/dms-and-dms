const ruleId = document.querySelector('#hidden-content').dataset.key;

const currentTitle = document.querySelector('#title').textContent;
const currentDescription = document.querySelector('#description').textContent;

const editTitle = document.querySelector('#name-input');
const editDescription = document.querySelector('#description-input');

editTitle.value = currentTitle;
editDescription.value = currentDescription;

const handleEditRule = async (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();

    const response = await fetch(`/api/rules/${ruleId}`, {
        method: 'PUT',
        body: JSON.stringify({
            titleInput,
            descriptionInput
        }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to update rule')
    }
}

document.querySelector('#submit-edits').addEventListener('click', handleEditRule);