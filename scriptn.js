document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('message');

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageElement.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validate username (only alphabets)
    const usernameRegex = /^[A-Za-z]+$/;
    if (!usernameRegex.test(username)) {
        messageElement.textContent = 'Username must contain only alphabets.';
        return;
    }

    // Validate password (minimum 8 characters, must include at least one letter, one number, and one special character)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        messageElement.textContent = 'Password must be at least 8 characters long and include letters, numbers, and special characters.';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match.';
        return;
    }

    // If validation passes
    messageElement.textContent = 'Signup successful!';
    messageElement.style.color = 'green';
});
