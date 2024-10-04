const registerFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#register-username').value.trim();
    const email = document.querySelector('#register-email').value.trim();
    const password = document.querySelector('#register-password').value.trim();

    if (username && email && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to register')
        }
    }
}

document.querySelector('#register-btn').addEventListener('click', registerFormHandler);