// Login actions
$("#cadastro-form").submit(function(e) {
    // Prevent reload
    e.preventDefault();

    // Field values
    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();

    if (!name || !email || !password) {
        alert('Preencha todos os campos e tente novamente!');
        return false;
    }

    // Store informations
    const newUser = {
        name,
        email,
        password,
    }

    const users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    $('#name').val('');
    $('#email').val('');
    $('#password').val('');

    // Redirect
    document.location.href = 'login.html';

    // Prevent url data
    return false;
});