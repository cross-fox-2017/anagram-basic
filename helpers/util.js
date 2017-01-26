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
    input = input.split('')
    let newInput = input.sort().join('');
    let findArr = []
    for(let i = 0; i < obj.length; i++){
      findArr.push(obj[i].word.split('').sort().join(''))
      if(findArr[i] === newInput){
        arr.push(obj[i].word)
      }
    }
    return arr;
  }
}
