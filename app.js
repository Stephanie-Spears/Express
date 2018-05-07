const express = require('express');

const app = express(); //returns an express application


app.set('view engine', 'pug');

//A route is where a server is set up to respond to a request from a client.
app.get('/', (req, res) => {
	res.render('index');
});



app.get('/cards', (req, res) => {
	res.render('card', {prompt: "Who is burried in Grant's tomb?"});
});




app.listen(3000, () => {
	console.log("The application is running.");
}); //









//
// const http = require('http');
// const port = process.env.PORT || 1337;
//
// http.createServer(function(request, response){
// 	response.writeHead(200, {'Content-Type': 'text/plain'});
// 	response.end('Hello Heroku\n');
// }).listen(port, function(){
// 	console.log("Server running at http://" + port + "/");
// });