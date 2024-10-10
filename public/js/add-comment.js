const dataFor = document.querySelector('#hidden-content').dataset.for;
const primaryKey = document.querySelector('#hidden-content').dataset.key;

const handleAddComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-input').value.trim();

    console.log(content);

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ dataFor, primaryKey, content }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            location.reload()
        } else {
            alert('Failed to add comment')
        }
    }
}

document.querySelector('#submit-comment').addEventListener('click', handleAddComment);