'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [{
      title: 'New Moon',
      author: 'Stephenie Meyer',
      pageQuantity: 563,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Eclipse',
      author: 'Stephenie Meyer',
      pageQuantity: 629,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Breaking Dawn',
      author: 'Stephenie Meyer',
      pageQuantity: 756,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {});
  },

  down: async (queryInterface) => await queryInterface.bulkDelete('Books', null, {}),
};
