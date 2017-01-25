'use strict';
const fs = require('fs')

function read() {
  let read =  fs.readFileSync('./db/fixtures/words', 'utf8').split('\n')
  let result = []
  read.forEach(function(val) {
    result.push({word: val.toLowerCase(), createdAt: new Date(), updatedAt: new Date()})
  })
  return result
}
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
    return queryInterface.bulkInsert('words', read()
    , {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('words', null, {});

  }
};
