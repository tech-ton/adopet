'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Tutores', [{
        nome: 'admin',
        email: 'admin@admin.com',
        senha: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          nome: 'user',
          email: 'user@user.com',
          senha: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
          }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tutores', null, {});
  }
};
