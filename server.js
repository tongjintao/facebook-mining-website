


var app = require('./app');

var http = require('http');


http.createServer(app).listen(3000,function(){
	console.log('ready boys');
});