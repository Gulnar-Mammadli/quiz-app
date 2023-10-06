const {connect} = require('../db');
const db = connect();

const UserQuiz = db.define("UserQuiz", {
    id: {
        type: db.Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    session_id: {
        type: db.Sequelize.DataTypes.UUID,
        allowNull: false,
    },  
    correct_question_id: {
        type: db.Sequelize.DataTypes.BIGINT,
        allowNull: true,
        referenes: {
        model: "Question",
        key: "id",
        },
        onDelete: 'CASCADE',
    },
    correct: {
        type: db.Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    wrong: {
        type: db.Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    completed: {
        type: db.Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    tableName: "user_quiz",
    timestamps: false,
})

module.exports = UserQuiz;