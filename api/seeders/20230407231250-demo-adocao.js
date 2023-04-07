'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Adocoes', [{
      id_pet: 2,
      id_tutor: 2,
      data: new Date(),
      createdAt: new Date(), 
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Adocoes', null, {});
  }
};
