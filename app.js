var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var router = require('./routes');

app.use('/people',jsonParser);
app.get('/',function(req,res) {
  res.send('This is going to be my main page');
});

app.use('/people',router);
app.listen(3000,function() {
  console.log('Boom boom pow');
})
