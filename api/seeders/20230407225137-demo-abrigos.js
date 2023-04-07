'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Abrigos', [{
        nome_ong: 'Admin pets',
        id_dono: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Abrigos', null, {});
  }
};
