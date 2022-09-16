'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      after: 'pageQuantity',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Books', 'publisher');
  },
};
