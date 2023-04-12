/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ Group }) {
      this.belongsTo(Group, { foreignKey: 'group_id' });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      group_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      present: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Student',
    },
  );
  return Student;
};
