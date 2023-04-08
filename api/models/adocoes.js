'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adocoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adocoes.belongsTo(models.Tutores, { foreignKey: 'id_tutor' });
      Adocoes.belongsTo(models.Pets, { foreignKey: 'id_pet'});
    }
  }
  Adocoes.init({
    data: {
      type: DataTypes.DATEONLY,
      validate:{
        isDate: {
          args:true,
          msg: "formato de data incorreto"
        },
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais na data"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo data ser vazio"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Adocoes',
  });
  return Adocoes;
};