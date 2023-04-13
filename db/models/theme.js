'use strict';
const { Model } = require('sequelize');
const question = require('./question');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Question) {
      this.hasMany(Question, { foreignKey: 'theme_id' })
    }
  }
  Theme.init(
    {
      theme: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
