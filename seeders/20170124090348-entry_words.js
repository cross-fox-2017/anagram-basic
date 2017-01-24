'use strict';
const fs = require("fs");
let file = "./db/fixtures/words";
let data = fs.readFileSync(file, "utf8");

// helper.words(data);
let words = data.split('\n')
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
    for (let i = 0; i < words.length; i++) {
      queryInterface.bulkInsert('Words', [
        {
          word: words[i],
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
    }
    return queryInterface
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
