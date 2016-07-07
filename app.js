var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var hbs = exphbs.create({
	defaultLayout: 'main',
	extname: '.hbs'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
	res.render('home');
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.use(express.static(__dirname + '/public'));

// app.use(function (req, res) {
// 	res.status(404);
// 	res.send('404 - Not Found');
// });

// app.use(function (err, req, res, next) {
// 	console.error(err.stack);
// 	res.status(500);
// 	res.send('500 - Server Error');
// });



app.listen(3000, function () {
	console.log('Express listening on port 3000!!');
});