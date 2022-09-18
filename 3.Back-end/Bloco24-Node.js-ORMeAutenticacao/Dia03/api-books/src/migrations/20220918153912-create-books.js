'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      releaseYear: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'release_year',
      },
      totalPages: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'total_pages',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('books');
  },
};
