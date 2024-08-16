"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserQuestion extends Model {
    static associate(models) {
      UserQuestion.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      UserQuestion.belongsTo(models.QuestionSet, {
        foreignKey: "QuestionSetId",
      });
    }
  }
  UserQuestion.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "UserId Required",
          },
          notEmpty: {
            msg: "UserId Required",
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
      roomCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "roomCode Required",
          },
          notEmpty: {
            msg: "roomCode Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "UserQuestion",
    }
  );
  return UserQuestion;
};
