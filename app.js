var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var router = require('./routes');

app.use('/',express.static(__dirname + '/public'));
app.use('/people',jsonParser);

app.use('/people',router);
app.listen(3000,function() {
  console.log('Boom boom pow');
});
