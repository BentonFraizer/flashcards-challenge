'use strict';
const { Theme } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Theme.bulkCreate([
      { theme: 'История' },
      { theme: 'География' },
      { theme: 'Кино' },
      { theme: 'Логика' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
