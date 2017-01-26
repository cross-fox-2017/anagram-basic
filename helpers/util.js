'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models/index');
var util = {};

util.anagrams = function(word, callback){
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
      return callback(word, data)
  })

}

module.exports = util;
