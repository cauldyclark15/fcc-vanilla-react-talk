(function init() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(items => {
			return createRowsInBody(items);
		});
})();

function createRowsInBody(items = []) {
	const userTableBody = document.getElementById('userTableBody');

	items.forEach(item => {
		const nameText = document.createTextNode(item.name);
		const emailText = document.createTextNode(item.email);
		const phoneText = document.createTextNode(item.phone);

		const tr = document.createElement('tr');

		const tdName = document.createElement('td');
		const tdEmail = document.createElement('td');
		const tdPhone = document.createElement('td');

		tdName.appendChild(nameText);
		tdEmail.appendChild(emailText);
		tdPhone.appendChild(phoneText);

		tr.appendChild(tdName);
		tr.appendChild(tdEmail);
		tr.appendChild(tdPhone);

		userTableBody.appendChild(tr);
	});
}
