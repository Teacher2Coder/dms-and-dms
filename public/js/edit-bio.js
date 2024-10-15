// Find the current bio and set the edit bio textbox to = that
const currentBio =  document.querySelector('#current-bio').textContent;
const editedBio = document.querySelector('#new-bio');
editedBio.value = currentBio;

// Find the current user that will be editted
const user = document.querySelector('#user').dataset.user;

const handleEditBio = async (event) => {
    event.preventDefault();

    // Assign the inputted text to a variable
    const newBio = editedBio.value;

    // Send the inputted text to the api
    const response = await fetch(`/api/users/${user}`, {
        method: 'PUT',
        body: JSON.stringify({ newBio }),
        headers: { 'Content-Type': 'application/json' }
    })

    // If the response is ok, reload the page
    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to update bio')
    }
}

// Add click event
document.querySelector('#save-bio').addEventListener('click', handleEditBio);