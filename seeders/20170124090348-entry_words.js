'use strict';
const fs = require("fs");
let file = "./db/fixtures/words";
let data = fs.readFileSync(file, "utf8");

let words = data.split('\n');
let wordsArr = []

for (let i = 0; i < words.length; i++) {
  wordsArr.push ({
    word: words[i],
    createdAt: new Date(),
    updatedAt: new Date()
  })
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
    return queryInterface.bulkInsert('Words', wordsArr);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Person', null, {});
  }
};
