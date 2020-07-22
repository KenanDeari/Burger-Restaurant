var express = require('express')
var burger = require('../models/burger.js');
var router = express.Router()


// home page route
router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var handlebarObject = { burgers: data };
    console.log(handlebarObject);
    //render the index.handlebar
    res.render('index', handlebarObject);

  });

});
// create burger to DB
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function () {
    res.redirect('/');
  });
});

// devour a burger
router.post('/burger/eat', function (req, res) {
  burger.updateOne(req.body.id, function () {
    res.redirect('/');
  });
});
router.post('/burger/restore', function (req, res) {
  burger.restoreOne(req.body.id, function () {
    res.redirect('/');
  });
});

module.exports = router;