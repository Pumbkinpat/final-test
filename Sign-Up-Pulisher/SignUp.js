document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // You can add your validation and signup logic here

    alert('Sign up successful!');
});
