'use strict';
const fs = require('fs');
var x = fs.readFileSync("./db/fixtures/words",'utf8').split('\n')

let y=[];

for(var i=0; i<x.length;i++){

    y.push(
      {
        word:x[i],
        createdAt:new Date(),
        updatedAt:new Date()
      }
    )

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
      return queryInterface.bulkInsert('Words',y)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
