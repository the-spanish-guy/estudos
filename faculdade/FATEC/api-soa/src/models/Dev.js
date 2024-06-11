const { Model, DataTypes, Sequelize } = require('sequelize');

class Dev extends Model {
  static init(connection) {
    super.init({
      id_DEV: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_DEV: DataTypes.STRING,
    }, {
      sequelize: connection,
      tableName: 'DEVS',
      modelName: 'Devs'
    })
  }

  static associate(models) {
    this.belongsToMany (models.Projeto, { foreignKey: 'id_DEV', through: 'DEV_PROJETO' , as: 'projeto' });
  }

}

module.exports = Dev;