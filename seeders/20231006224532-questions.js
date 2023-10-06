'use strict';

const questions = require("./questions.json");
const answers = require("./answers.json");
const Question = require("../models/Question");
const Answer = require("../models/Answer");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query("SET GLOBAL FOREIGN_KEY_CHECKS = 0", {raw: true});
    await Question.truncate();
    await Answer.truncate();
    await Question.bulkCreate(questions);
    await Answer.bulkCreate(answers);
    await queryInterface.sequelize.query("SET GLOBAL FOREIGN_KEY_CHECKS = 1", {raw: true});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
