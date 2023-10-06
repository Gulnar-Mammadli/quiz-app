const {connect} = require('../db');
const db = connect();

const Question = db.define("Question", {
    id: {
        type: db.Sequelize.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    question: {
        type: db.Sequelize.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "questions",
    timestamps: false,
});

module.exports = Question;