document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    // Simulate sending a reset code (you would replace this with an actual API call)
    if (email) {
        messageDiv.textContent = "A reset code has been sent  " ,{email};
        window.location.assign("login0.html"); 
    } else {
        messageDiv.textContent = 'Please enter a valid email address';
        messageDiv.style.color = 'red';
    }
});