/* jshint indent: 2 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Member = sequelize.define('Member', {
    id: {
      type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  })
  return Member;
}