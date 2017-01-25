'use strict';

var models = require('../models/words');
// var util = {};
//
// util.anagram = function(source, callback){
//
// }
module.exports = {
  solve : function(input,find) {
    let arr = []
    input = input.split('')
    for(let i = 0; i < find.length; i++){
      let x = find[i].word.split('')
      for(let k = 0; k < input.length; k++) {
        x[k].sort(function(a, b){return a-b});
      }
      input[i].sort(function(a, b){return a-b});
      if(find[i] === input){
        arr.push(find[i])
      }
    }
    return arr;
  }
}
