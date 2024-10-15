const registerFormHandler = async (event) => {
    event.preventDefault();

    // select the username, email and password inputs
    const username = document.querySelector('#register-username').value.trim();
    const email = document.querySelector('#register-email').value.trim();
    const password = document.querySelector('#register-password').value.trim();

    // If the user put in an username, email and password, run this code
    if (username && email && password) {
        // Send the user inputs to the server to create a new user
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If the response works, send the user to the homepage
        // else alert the user that new user creation failed
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to register')
        }
    }
}

// Add click event
document.querySelector('#register-btn').addEventListener('click', registerFormHandler);