// Select the values in the hidden div
const dataFor = document.querySelector('#hidden-content').dataset.for;
const primaryKey = document.querySelector('#hidden-content').dataset.key;

const handleAddComment = async (event) => {
    event.preventDefault();

    // Assign the inputted content to a variable
    const content = document.querySelector('#comment-input').value.trim();

    // If there is content, send it to the api along with the hidden values
    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ dataFor, primaryKey, content }),
            headers: { 'Content-Type': 'application/json' }
        })

        // If the response is ok, reload the page
        if (response.ok) {
            location.reload()
        } else {
            alert('Failed to add comment')
        }

    // If there isn't any content, alert the user
    } else {
        alert('Please type something in the text box')
    }
};

document.querySelector('#submit-comment').addEventListener('click', handleAddComment);