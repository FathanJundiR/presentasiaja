"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionDetail extends Model {
    static associate(models) {
      QuestionDetail.belongsTo(models.QuestionSet, {
        foreignKey: "QuestionSetId",
      });
    }
  }
  QuestionDetail.init(
    {
      clue: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Clue Required",
          },
          notEmpty: {
            msg: "Clue Required",
          },
        },
      },
      correctAnswer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Correct Answer Required",
          },
          notEmpty: {
            msg: "Correct Answer Required",
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "imgUrl Required",
          },
          notEmpty: {
            msg: "imgUrl Required",
          },
        },
      },
      QuestionSetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "QuestionSetId Required",
          },
          notEmpty: {
            msg: "QuestionSetId Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "QuestionDetail",
    }
  );
  return QuestionDetail;
};
