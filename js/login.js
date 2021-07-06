// Login actions
$("#login-form").submit(function(e) {
    // Prevent reload
    e.preventDefault();

    // Field values
    const email = $('#email').val();
    const password = $('#password').val();

    if (!email || !password) {
        alert('Preencha todos os campos e tente novamente!');
        return false;
    }

    const users = JSON.parse(localStorage.getItem('users') ? localStorage.getItem('users') : '[]');
    let logged = false;

    // Check in users
    const user = users.filter((user) => user.email == email);
    if (user.length > 0 && user[0].password == password) {
        // User logged in
        const loggedUser = {
            name: user[0].name,
            email: user[0].email,
            location: user[0].location,
        }

        localStorage.setItem('user', JSON.stringify(loggedUser));

        // Redirect
        document.location.href = 'index.html';
        logged = true;
    }

    if (!logged) {
        alert('Usuário/senha incorretos!');
    }

    // Prevent url data
    return false;
});