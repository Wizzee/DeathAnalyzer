var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Death Analyzer</h1></body></html>');
});

app.get('/:region/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Looking at ${req.params.id}'s profile in the ${req.params.region} region</h1></body></html>`);
});

app.listen(port);