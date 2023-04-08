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
      Pets.hasOne(models.Adocoes, { 
        foreignKey: 'id_pet'});
    }
  }
  Pets.init({
    nome: {
      type:DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no nome"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo nome ser vazio"
        }
      }
    },
    descricao: {
      type:DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais na descrição"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo descrição ser vazio"
        }
      }
    },
    idade: {
      type:DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no campo idade"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo idade ser vazio"
        }
      }
    },
    porte: {
      type:DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no campo porte"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo porte ser vazio"
        }
      }
    },
    adotado: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          args: true,
          msg: "Não é permitido campo adotado ser vazio"
        }
      }
    },
    endereco: {
      type:DataTypes.STRING,
      validate: {
        not: {
          args: /[<"'=>]/,
          msg: "Não é permitido caracteres especiais no endereço"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo endereço ser vazio"
        }
      }
    },
    foto: {
      type:DataTypes.STRING,
      validate: {
        not: {
          args: /[<"' >]/,
          msg: "Não é permitido caracteres especiais na foto"
        },
        notEmpty: {
          args: true,
          msg: "Não é permitido campo foto ser vazio"
        }
      }
    }
  }, {
    defaultScope: {
      where: { adotado: false }
    },
    scopes: {
      adotado: { 
        where: { adotado: true }
      },
      todos: {
        where: { }
      }
    },
    sequelize,
    modelName: 'Pets',
  });
  return Pets;
};