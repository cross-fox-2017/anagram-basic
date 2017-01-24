'use strict';

var models = require('../models/words');
// var util = {};
//
// util.anagram = function(source, callback){
//
// }
module.exports = {
  solve : function(input,obj) {
    let arr = []
    obj.findAll({raw: true}).then(function (find) {
      for(let i = 0; i < find.length; i++){
        for(let k = 0; k < input.length; k++) {
          if (find[i].word.indexOf(input[k]) !== -1 && find[i].word.length === input.length) {
            arr.push(find[i].word);
            break;
          }
        }
      }
      console.log(arr);
      return arr
    })
  }
}
