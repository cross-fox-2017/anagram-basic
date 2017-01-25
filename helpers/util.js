'use strict';

var models = require('../models/index');
var word = models.word
var util = {};
var sequelize = require('sequelize');

util.anagrams = function (source, callback){
  let result = []
  let finder = source.split("").sort()
  word.findAll({where: sequelize.where(sequelize.fn('char_length', sequelize.col('word')), source.length )
}).then(function (data) {
    data.forEach(function(value){
      let search = value.dataValues.word.split("").sort()
      if (search.join("") == finder.join("")){
        result.push(value.dataValues.word);
      }
    })
    return callback(source, result)
  })
}

module.exports = util;

// function test (source, callback){
//   let result = []
//   let finder = source.split("").sort()
//   word.findAll({where: sequelize.where(sequelize.fn('char_length', sequelize.col('word')), source.length )
// }).then(function (data) {
//     data.forEach(function(value){
//       let search = value.dataValues.word.split("").sort()
//       if (search.join("") == finder.join("")){
//         result.push(value.dataValues.word);
//       }
//     })
//     return callback(source, result)
//   })
// }
//
// test('stop')
