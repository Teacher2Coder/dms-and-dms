const category = document.querySelector('#hidden-content').dataset.for;
const pKey = document.querySelector('#hidden-content').dataset.key;

const handleDeleteContent = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/${category}/${pKey}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        location.replace(`/${category}`);
    } else {
        alert('Failed to delete')
    }
}

document.querySelector('#confirm').addEventListener('click', handleDeleteContent);