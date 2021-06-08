/* jshint indent: 2 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Station = sequelize.define('Station', {
    station_id: {
      type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      allowNull: false,
    },
    station_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
    latitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    longitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  })
  return Station;
}