'use strict';
const fs = require('fs')
const arr = fs.readFileSync('./db/fixtures/test.txt').toString().trim().split("\r\n")
// const arr = fs.readFileSync('./db/fixtures/words.txt').toString().trim().split("\r\n")//ambil data dari words.txt

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var tambahdata = []
    for (var i = 0; i < arr.length; i++) {
      tambahdata.push({
        words: arr[i],
        createdAt: new Date(),
        updatedAt : new Date()
      })
    }

    return queryInterface.bulkInsert('Tb_anagrams',tambahdata)

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
        return queryInterface.bulkDelete('Tb_anagrams', null, {});
  }
};
