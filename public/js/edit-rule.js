// Get the rule id from the hidden content div
const ruleId = document.querySelector('#hidden-content').dataset.key;

// Get the current data for the rule
const currentTitle = document.querySelector('#title').textContent;
const currentDescription = document.querySelector('#description').textContent;

// Select the inputs
const editTitle = document.querySelector('#name-input');
const editDescription = document.querySelector('#description-input');

// Make the inputs equal to the current rule data for easy editing
editTitle.value = currentTitle;
editDescription.value = currentDescription;

const handleEditRule = async (event) => {
    event.preventDefault();

    // Assign the inputed values to a variable
    const titleInput = document.querySelector('#name-input').value.trim();
    const descriptionInput = document.querySelector('#description-input').value.trim();

    // If all fields have been filled out, run this code
    if (titleInput && descriptionInput) {
        // Send the new data to the api
        const response = await fetch(`/api/rules/${ruleId}`, {
            method: 'PUT',
            body: JSON.stringify({
                titleInput,
                descriptionInput
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        // If the response if ok, reload the page
        if (response.ok) {
            location.reload();
        } else {
            alert('Failed to update rule')
        }
    }
}

// Add click event
document.querySelector('#submit-edits').addEventListener('click', handleEditRule);