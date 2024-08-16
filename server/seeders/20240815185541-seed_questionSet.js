"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionSets = require("../data/questionSet.json");
    questionSets.forEach((questionSet) => {
      questionSet.createdAt = questionSet.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("QuestionSets", questionSets, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("QuestionSets", null, {});
  },
};
