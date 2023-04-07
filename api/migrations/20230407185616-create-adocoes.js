'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Adocoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      id_pet:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pets', key: 'id'}
      },
      id_tutor:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Tutores', key: 'id'}
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
    await queryInterface.dropTable('Adocoes');
  }
};