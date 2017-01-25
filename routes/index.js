var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');
const models = require('../models')

/* GET home page. */

router.get('/', function(req, res, next) {
    var word = req.query.word;

    // release 2
    // res.render('index', {title: 'Anagrams', word: word, anagrams: {} });

    // release 3
    models.Tb_anagram.findAll().then(function(dataAnagram) {
        var data = []
        dataAnagram.forEach(function(showdataAnagram) {
            var status = true;
            if (showdataAnagram.words.length == word.length) {
                for (var i = 0; i < showdataAnagram.words.length; i++) {
                    var arr1 = showdataAnagram.words.split("")
                    var arr2 = word.split("")
                    console.log(arr1);
                    console.log(arr2);
                    if (arr1.indexOf(arr2[i]) == -1) {
                        status = false
                        break;
                    }
                }
                if (status) {
                    data.push(showdataAnagram.words)
                }
            }
        })
        res.render('index', {
            title: 'Anagrams',
            word: word,
            anagrams: data
        });
    })




    // helper.anagrams(function(data) {
    //     res.render('index', {
    //         title: 'Anagrams',
    //         word: word,
    //         anagrams: data
    //     });
    // });
});

module.exports = router;
