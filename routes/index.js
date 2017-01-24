var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
  let words = req.query.word;

  // release 2
  res.render('index', {title: 'Anagrams', word: words, anagrams: {} });

  // release 3
  // helper.anagrams(word, function(source, data){
  //   res.render('index', { title: 'Anagrams', word: source, anagrams: data });
  // });

});

module.exports = router;
