document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get uesr password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'sontan@email.com' && userPassword == 'secret') {
        window.location.href = 'banking.html' ;
        console.log('show');
    }
})