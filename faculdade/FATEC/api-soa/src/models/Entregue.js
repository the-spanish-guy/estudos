const { Model, DataTypes, Sequelize } = require('sequelize');

class Entregue extends Model {
  static init(connection) {
    super.init({
      id_ENTREGUE: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      PROJETOS_ID_ENTREGUE: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      tableName: 'ENTREGUE',
      modelName: 'Entregues'
    })
  }

  static associate(models) {
    this.hasOne(models.Projeto, { foreignKey: 'PROJETOS_ID_ENTREGUE', as: 'projetos'} )
  }

}

module.exports = Entregue;