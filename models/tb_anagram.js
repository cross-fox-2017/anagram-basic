'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tb_anagram = sequelize.define('Tb_anagram', {
    words: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tb_anagram;
};