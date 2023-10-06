'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('answers', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      answer: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      question_id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: "questions",
          key: "id",
        },
        onDelete: 'CASCADE',
      },
      correct: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('answers');
  }
};
