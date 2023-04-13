'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Theme) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
    }
  }
  Question.init(
    {
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Theme',
          key: 'id',
        },
      },
      questions: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answers: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
