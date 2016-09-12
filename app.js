var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var router = require('./routes');

app.use('/',express.static(__dirname + '/public'));
app.use(function(req,res,next) {
  //it's ok to make requests to this API from any domain
  res.header("Access-Control-Allow-Origin","*");
  //tells the client which headers are permitted in the request
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");

  //grant preflight requests
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Headers', "PUT, POST,DELETE");
    return res.staus(200).json({});
  }
  next();
});
app.use('/people',jsonParser);

app.use('/people',router);
app.listen(3000,function() {
  console.log('Boom boom pow');
});
