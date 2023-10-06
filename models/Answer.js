const {connect} = require('../db');
const db = connect();

const Answer = db.define("Answer",{
    id: {
        type: db.Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    answer: {
        type: db.Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    question_id: {
        type: db.Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
        model: "Question",
        key: "id",
        },
        onDelete: 'CASCADE',
    },
    correct: {
        type: db.Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
}, {
    tableName: "answers",
    timestamps: false,
});

module.exports = Answer;