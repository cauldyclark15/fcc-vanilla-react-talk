const express = require('express');
const path = require('path');
const server = express();

const port = 5000;

server.use(express.static(path.join(__dirname, 'dist')));

server.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'login.html'));
});

server.listen(port, function() {
	console.log('yes its working');
});
