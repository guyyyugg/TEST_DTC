'Makertimes strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Makertimes', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      r_time: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      r_lat: {
        allowNull: true,
        type: Sequelize.STRING
      },
      r_lon: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Makertimes');
  }
};

