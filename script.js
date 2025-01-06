document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'All fields are required!';
        return;
    }

    // Simple validation example
    if (username === 'admin' && password === 'admin123') {
        alert('Login Successful!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
