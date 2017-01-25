'use strict';

var db = require('../models');
var util = {};

util.anagrams = function(source, callback){
  let b =[]
  let bal= source.split('').sort().join('')
  db.Words.findAll().then(function(tes){
    tes.forEach(function(a){
      if(a.word.split('').sort().join('') === bal && a.word!==source){
        b.push(a.word)
      }
    })
      callback(b)
  })
}

module.exports = util;
