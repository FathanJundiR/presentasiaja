"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionDetails = require("../data/questionDetail.json");
    questionDetails.forEach((questionDetail) => {
      questionDetail.createdAt = questionDetail.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("QuestionDetails", questionDetails, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("QuestionDetails", null, {});
  },
};
