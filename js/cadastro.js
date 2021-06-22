// Login actions
$("#cadastro-form").submit(function(e) {
    // Prevent reload
    e.preventDefault();

	const availableFields = [
    	{
			name: 'Nome',
			element: 'name',
			match: null
		},
    	{
			name: 'Email',
			element: 'email',
			match: null
		},
    	{
			name: 'Senha',
			element: 'password',
			match: null
		},
		{
			name: 'Confirmação de senha',
			element: 'password_confirmation',
			match: 'password'
		},
		{
			name: 'Sobrenome',
			element: 'lastname',
			match: null
		},
		{
			name: 'Confirmação de email',
			element: 'email_confirmation',
			match: 'email'
		},
		{
			name: 'Rua',
			element: 'street',
			match: null
		},
		{
			name: 'Número',
			element: 'streetnumber',
			match: null
		},
		{
			name: 'Bairro',
			element: 'district',
			match: null
		},
		{
			name: 'Estado',
			element: 'state',
			match: null
		}
	];

	const unMatchFields = [];

	// Null validation
	for (const field of availableFields) {
		const fieldValue = $('#' + field.element).val();
		if (!fieldValue) {
			alert('Preencha todos os campos e tente novamente.');
			return false;
		}
	}

	// Match validation
	const matchFields = availableFields.filter(field => field.match); 
	for (const field of matchFields) {
		const valueToMatch = $('#' + field.match).val();
		const valueField = $('#' + field.element).val();
		if (valueToMatch != valueField) {
			unMatchFields.push(field);
		}
	}

	if (Array.isArray(unMatchFields) && unMatchFields.length > 0) {
		alert('Os seguintes campos não coincidem: ' + unMatchFields.map(field => field.name).join(', '));
		return false;
	}

    // Store informations
	const newUser = {}
	for (const field of availableFields) {
		newUser[field.element] = $('#' + field.element).val();
	}

    const users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    // Redirect
    document.location.href = 'login.html';

    // Prevent url data
    return false;
});
