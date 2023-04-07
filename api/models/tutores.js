'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutores.hasOne(models.Abrigos, { foreignKey: 'id_dono' });
      Tutores.hasMany(models.Adocoes, { foreignKey: 'id_tutor' });
    }
  }
  Tutores.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cidade: DataTypes.STRING,
    telefone: DataTypes.STRING,
    sobre: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tutores',
  });
  return Tutores;
};