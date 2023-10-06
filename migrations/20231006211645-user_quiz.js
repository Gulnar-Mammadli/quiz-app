'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_quiz', { 
        id: {
          type: Sequelize.DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        session_id: {
          type: Sequelize.DataTypes.UUID,
          allowNull: false,
        },  
        correct_question_id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: true,
          referenes: {
            model: "questions",
            key: "id",
          },
          onDelete: 'CASCADE',
        },
        correct: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        wrong: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        completed: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_quiz');
  }
};
