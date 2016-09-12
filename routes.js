var express = require('express');
var router = express.Router();
var _ = require('underscore');
var people = [];
var bodyID = 1;

router.get('/',function(req,res) {
  res.send(people);
});

router.get('/:id',function(req,res) {
  var matchedPerson = _.findWhere(people, {id:parseInt(req.params.id)});
  res.send(matchedPerson);
});

router.post('/',function(req,res) {
  var body = req.body;
  body.id = bodyID;
  bodyID++;

  people.push(body);
  res.send(people);
});


module.exports = router;
