(function init() {
	const loginForm = document.getElementById('loginForm');

	loginForm.addEventListener('submit', event => {
		console.log('+++++++', event.target.teardrop.value);
	});
})();
