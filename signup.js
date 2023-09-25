        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('loginForm');
            const message = document.getElementById('message');
        
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
        
                if (username === 'admin' && password === 'adminpassword') {
                    message.innerHTML = 'Login successful!';
                    message.style.color = 'green';
                } else {
                    message.innerHTML = 'Invalid username or password. Please try again.';
                    message.style.color = 'red';
                }
            });
        });
        