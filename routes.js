var express = require('express');
var router = express.Router();

var people = [];
var bodyID = 1;

router.get('/',function(req,res) {
  res.send(people);
});

router.post('/',function(req,res) {
  var body = req.body;
  body.id = bodyID;
  bodyID++;

  people.push(body);
  res.send(people);
});

module.exports = router;
