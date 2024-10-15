const loginFormHandler = async (event) => {
    event.preventDefault();

    // Get the inputted username and password
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    // If there is a username and password entered, run this
    if (username && password) {
        // Send username and password to the server
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        // If the response was good, go to home page
        // else alert that the login failed
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to login')
        }
    }
};

// Add click event
document.querySelector('#login-submit').addEventListener('click', loginFormHandler)