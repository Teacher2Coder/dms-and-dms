const logout = async () => {
    // Send the logout command to the server
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    // If the command is successful, go to the login page
    // else alert that it failed
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out.');
    }
};
  
document.querySelector('#logout').addEventListener('click', logout); 