var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();

var people = [];
var bodyID = 1;
app.use('/people',jsonParser);
app.get('/',function(req,res) {
  res.send('This is going to be my main page');
});

app.get('/people',function(req,res) {
  res.send(people);
});

app.post('/people',function(req,res) {
  var body = req.body;
  body.id = bodyID;
  bodyID++;
  
  people.push(body);
  res.send(people);
});

app.listen(3000,function() {
  console.log('Boom boom pow');
})
