'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Tutores', [{
      nome: 'admin',    
      email: 'admin@admin.com',     
      senha: 'admin',
      cidade: 'sp',
      telefone: '652437',
      sobre: 'sou legal',
      foto: null,     
      createdAt: new Date(), 
      updatedAt: new Date()
      },{
        nome: 'user',    
        email: 'user@admin.com',     
        senha: '1234',
        cidade: 'sp',
        telefone: '653457',
        sobre: 'sou legal',
        foto: null,     
        createdAt: new Date(), 
        updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Tutores', null, {});
  }
};
