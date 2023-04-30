'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const date = new Date();
    const days = ['mon', 'tue', 'wed', 'thu', 'fri'].map((el) => ({
      day: el,
      createdAt: date,
      updatedAt: date,
    }));

    const pairTypes = ['groups', 'pairs', 'solo'].map((el) => ({
      type: el,
      createdAt: date,
      updatedAt: date,
    }));

    await queryInterface.bulkInsert('Days', days);
    await queryInterface.bulkInsert('PairTypes', pairTypes);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
