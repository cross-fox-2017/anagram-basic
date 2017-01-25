var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');
var db = require('../models')
/* GET home page. */

router.get('/', function(req, res, next) {
  var word = req.query.word;

  // release 2
  res.render('form', {title: 'Anagrams', anagrams: '' });

  // release 3
  // helper.anagrams(word, function(source, data){
  //   res.render('index', { title: 'Anagrams', word: source, anagrams: data });
  // });

});

router.post('/',function(req,res){
  var word = req.body.word;
  helper.anagrams(word, function(data){
    res.render('form', { title: 'Anagrams', anagrams: data });
  });

})

  module.exports = router;
