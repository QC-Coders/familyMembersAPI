var express = require('express');
var app = express();
app.get('/',function(req,res) {
  res.send('All good over here!');
});

app.listen(3000,function() {
  console.log('Boom boom pow');
})
