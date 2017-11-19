(function init() {
	const loginForm = document.getElementById('loginForm');

	loginForm.addEventListener('submit', event => {
		event.preventDefault();

		const teardrop = event.target['teardrop'].value;

		if (teardrop === 'Teardrop') {
			localStorage.setItem('auth', 'pass1515');

			return window.location.replace('/');
		}
	});
})();
