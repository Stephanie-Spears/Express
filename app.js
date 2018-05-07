const http = require('http');
const port = process.env.PORT || 1337;

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Heroku\n');
}).listen(port, function(){
	console.log("Server running at http://" + port + "/");
});

// const express = require('express');
//
// const app = express(); //returns an express application
//
//
// app.get('/', (request, response) => {//A route is where a server is set up to respond to a request from a client.
// 	response.send('I love Express!');
// });
//
// app.listen(3000); //