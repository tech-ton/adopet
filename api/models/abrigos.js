'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Abrigos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Abrigos.belongsTo(models.Tutores, { foreignKey: 'id_dono' });
      Abrigos.hasMany(models.Pets, { foreignKey: 'id_abrigo' });
    }
  }
  Abrigos.init({
    nome_ong: {
      type: DataTypes.STRING,
      validate: {
        validaNome: dado=>{
          if (dado.length < 5){
            throw new Error("O nome do abrigo de ter no minimo 5 caracteres")
          }
        },
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no nome do abrigo"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo estar vazio"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Abrigos',
  });
  return Abrigos;
};