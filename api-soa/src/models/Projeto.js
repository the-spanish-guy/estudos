const { Model, DataTypes } = require('sequelize');
// const Autor = require('./Autor');
// const Editora = require('./Editora');
// const Categoria = require('./Categoria');

class Projeto extends Model {
  static init(connection) {
    super.init({
      id_PROJETO: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_PROJETO: DataTypes.STRING,
      status: DataTypes.STRING(80),
      CLIENTE_ID_PROJETO: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      tableName: 'PROJETOS',
      modelName: 'Projetos'
    })
  }

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'CLIENTE_ID_PROJETO', as: 'cliente' });
    this.belongsToMany (models.Dev, { foreignKey: 'id_PROJETO', through: 'DEV_PROJETO' , as: 'devs' });

    this.hasOne(models.Cliente);
    this.hasMany(models.Dev);
  }
}

module.exports = Projeto;