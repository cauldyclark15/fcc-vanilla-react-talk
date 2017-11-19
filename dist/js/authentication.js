(function init() {
	const loginForm = document.getElementById('loginForm');

	loginForm.addEventListener('submit', event => {
		event.preventDefault();

		const teardrop = event.target['teardrop'].value;

		if (teardrop === 'Teardrop') {
			localStorage.setItem('auth', 'pass1515');

			return window.location.replace('/');
		}

		const errorText = document.createTextNode('Nah, its Teardrop');
		const pTag = document.createElement('p');
		pTag.appendChild(errorText);

		return loginForm.appendChild(pTag);
	});
})();
