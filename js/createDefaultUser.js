const defaultUser = {
    email: 'admin@pucminas.com',
    lastname: 'PUC',
    password: 'admin',
    name: 'MINAS',
    location: {
        latitude: -19.8594004,
        longitude: -43.9211194,
    },
}

const createDefaultUser = (defaultUser) => {
    let users = JSON.parse(localStorage.getItem('users') ?? '');

    if (!users) users = [];

    const alreadyCreatedDefault = users.find((item) => item.email == defaultUser.email);
    if (alreadyCreatedDefault) return;

    users.push(defaultUser);

    localStorage.setItem('users', JSON.stringify(users));
}

$(document).ready(() => {
    createDefaultUser(defaultUser);
})
