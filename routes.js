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
  var filteredBody = _.pick(body, 'name','age','gender');
  filteredBody.id = bodyID;
  bodyID++;
  people.push(filteredBody);
  res.json(people);
});

router.delete('/:id',function(req,res) {
  var matchedPerson = _.findWhere(people,{id:parseInt(req.params.id)});
  var filterdPeople = _.without(people, matchedPerson);
  people = filterdPeople;
  res.json(matchedPerson);
});

router.put('/:id',function(req, res) {
  if(req.params) {
    var matchedPerson = _.findWhere(people,{id:parseInt(req.params.id)});
    //?name=Henry
    if(req.query.name && req.query.name.trim().length > 0) {
      matchedPerson.name = req.query.name;
      res.json(matchedPerson);
    }else res.status(400).json({error:"Sorry charlie, that's bad!"});

  }
});


module.exports = router;
