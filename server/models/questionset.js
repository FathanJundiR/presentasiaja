"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionSet extends Model {
    static associate(models) {
      QuestionSet.hasMany(models.QuestionDetail, {
        foreignKey: "QuestionSetId",
      });
      QuestionSet.hasMany(models.UserQuestion, { foreignKey: "QuestionSetId" });
    }
  }
  QuestionSet.init(
    {
      setName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Question Set Name Required",
          },
          notEmpty: {
            msg: "Question Set Name Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "QuestionSet",
    }
  );
  return QuestionSet;
};
