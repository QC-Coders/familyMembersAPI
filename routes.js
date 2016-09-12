var express = require('express');
var router = express.Router();
var _ = require('underscore');
var people = [];
var bodyID = 1;

router.get('/',function(req,res) {
  res.json(people);
});

router.get('/:id',function(req,res) {
  var matchedPerson = _.findWhere(people, {id:parseInt(req.params.id)});
  res.json(matchedPerson);
});

router.post('/',function(req,res) {
  var body = req.body;
  body.id = bodyID;
  bodyID++;

  people.push(body);
  res.json(people);
});

router.delete('/:id',function(req,res) {
  var matchedPerson = _.findWhere(people,{id:parseInt(req.params.id)});
  var filterdPeople = _.without(people, matchedPerson);
  people = filterdPeople;
  res.json(matchedPerson);
})


module.exports = router;
