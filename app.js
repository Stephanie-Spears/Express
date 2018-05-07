const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

app.listen(3000, () => {
	console.log('The application is running on localhost:3000!')
});

const ghpages = require('gh-pages');

ghpages.publish('/dist', function(err) {

});


// const http = require('http');
// const port = process.env.PORT || 3000;
//
// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello Heroku\n');
// }).listen(port, function(){
// 	console.log("Server running at http://" + port + "/");
// });