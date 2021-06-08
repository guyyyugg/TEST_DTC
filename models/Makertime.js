/* jshint indent: 2 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Makertime = sequelize.define('Makertime', {
    id: {
      type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      allowNull: false,
    },
    r_time: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    r_lat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    r_lon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  })
  return Makertime;
}