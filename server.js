'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
	var headers = req.headers,
		language = headers['accept-language'].split(',', 1)[0],
		software = headers['user-agent'].match(/\(([^)]+)\)/);
	res.json({
		ipaddress: 	headers['x-forwarded-for'],
		language: language,
		software: software[0],
	});
})

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});