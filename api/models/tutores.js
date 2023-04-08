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
    nome: {
      type: DataTypes.STRING,
      validate: {
        validanome: nome=>{
          if (nome.length < 5){
            throw new Error("O nome deve ter no minimo 5 caracteres")
          }
        },
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no nome"
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'= >]/,
          msg: "Não é permitido caracteres especiais no email"
        },
        isEmail: true
      }
    },
    senha: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'= >]/,
          msg: "Não é permitido caracteres especiais na senha"
        }
      }
    },
    cidade: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no campo cidade"
        }
      }
    },
    telefone: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no telefone"
        }
      }
    },
    sobre: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais na descrição"
        }
      }
    },
    foto: {
      type: DataTypes.STRING,
      validate: {
        not: {
          args: /[<"' >]/,
          msg: "Não é permitido caracteres especiais na foto"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tutores',
  });
  return Tutores;
};