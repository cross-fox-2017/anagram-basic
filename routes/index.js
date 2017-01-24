const express = require('express');
const router = express.Router();
const helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
  let words = req.query.word;

  // release 2
  // res.render('pages/', {title: 'Anagrams', word: words, anagrams: {} });

  // release 3
  helper.solve(word, function(source, data){
    res.render('pages/', { title: 'Anagrams', word: source, anagrams: data });
  });

});

// router.get('/anagram', function (req, res, next){
//   res.render("pages/", {data: req.query.words})
// })

module.exports = router;
