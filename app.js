const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

console.log(PORT);

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function() {
	console.log(`Server running on port ${PORT} `);
});
