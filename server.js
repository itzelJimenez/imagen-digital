var express = require('express');
var app = express();
/*
app.get('/', function (req, res) {
	res.send("Hola!");
});

app.get('/ivan', function (req, res) {
	res.send("Hola!");
});*/

app.use('/', express.static('public'));
app.use('/static', express.static(__dirname+'/node_modules'));

app.listen(process.env.PORT || 3000, function(){
	console.log("Servidor escuchando en localhost:3000")
});