'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pets', [{
      id_abrigo: 1,
      nome: "Doguinho",
      descricao: "Muito carinhoso",
      idade: "Dois meses",
      porte: "pequeno",
      adotado: false,
      endereco: "sp",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktXg5_v8-L9AslphhrFvphE12SWkGl-_Jig&usqp=CAU",
      createdAt: new Date(), 
      updatedAt: new Date()
      },
      {
        id_abrigo: 1,
        nome: "Cao",
        descricao: "Muito nervoso",
        idade: "Dois anos",
        porte: "pequeno",
        adotado: true,
        endereco: "sp",
        foto: "https://i0.wp.com/petanjo.com/blog/wp-content/uploads/2016/12/Captura-de-Tela-2016-12-13-a%CC%80s-11.00.33.png?resize=238%2C300&ssl=1",
        createdAt: new Date(), 
        updatedAt: new Date()
        }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pets', null, {});
  }
};
