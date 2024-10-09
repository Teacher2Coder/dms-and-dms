const currentBio =  document.querySelector('#current-bio').textContent;
const editedBio = document.querySelector('#new-bio');
const user = document.querySelector('#user').dataset.user;

editedBio.value = currentBio;

const handleEditBio = async (event) => {
    event.preventDefault();

    const newBio = editedBio.value;

    const response = await fetch(`/api/users/${user}`, {
        method: 'PUT',
        body: JSON.stringify({ newBio }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        location.reload();
    } else {
        alert('Failed to update bio')
    }
}

document.querySelector('#save-bio').addEventListener('click', handleEditBio);