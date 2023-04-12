/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate({ Student }) {
      this.hasMany(Student, { foreignKey: 'group_id' });
    }
  }
  Group.init(
    {
      groupName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Group',
    },
  );
  return Group;
};
