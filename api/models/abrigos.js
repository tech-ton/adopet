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
    nome_ong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Abrigos',
  });
  return Abrigos;
};