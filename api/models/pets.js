'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pets.belongsTo(models.Abrigos, { foreignKey: 'id_abrigo' })
      Pets.hasOne(models.Adocoes, { foreignKey: 'id_pet' });
    }
  }
  Pets.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    idade: DataTypes.STRING,
    porte: DataTypes.STRING,
    adotado: DataTypes.BOOLEAN,
    endereco: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};