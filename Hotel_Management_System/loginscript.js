

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.textContent = '';

    // Simulated user database
    var users = [
        { email: 'user1@gmail.com', password: 'password123' },
        { email: 'user2@gmail.com', password: 'password456' }
    ];

    // Check if the user exists and the password matches
    var user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.assign("reservation.html"); // Redirect to customer.html
        // Redirect to a different page or perform further actions
    } else {
        errorMessage.textContent = 'Invalid email or password!';
    }

    // Clear form fields
    document.getElementById('loginForm').reset();




});



