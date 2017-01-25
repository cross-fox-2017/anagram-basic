const express = require('express');
const router = express.Router();
const helper = require('../helpers/util');
var models = require('../models/');

/* GET home page. */

router.get('/', function(req, res, next) {
  // let words = req.query.word;

  // release 2
  // res.render('pages/', {title: 'Anagrams'});
  res.render("pages/")

  // release 3
  // helper.solve(word, function(source, data){
  //   res.render('pages/', { title: 'Anagrams', word: source, anagrams: data });
  // });

});

router.post('/', function (req, res, next){
  models.Words.findAll({raw:true}).then(function (data) {
    let word_arr = helper.solve(req.body.word_input, data)
    res.render("pages/result", {data: req.body.word_input, output: word_arr})
  })
})

module.exports = router;
