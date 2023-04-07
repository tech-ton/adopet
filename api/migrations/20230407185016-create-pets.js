'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      porte: {
        type: Sequelize.STRING
      },
      adotado: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      endereco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      foto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_abrigo:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Abrigos', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pets');
  }
};