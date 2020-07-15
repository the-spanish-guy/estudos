const { Model, DataTypes, Sequelize } = require('sequelize');

class Cliente extends Model {
  static init(connection) {
    super.init({
      id_CLIENTE: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_CLIENTE: DataTypes.STRING,
    }, {
      sequelize: connection,
      tableName: 'CLIENTES',
      modelName: 'Cliente'
    })
  }

  static associate(models) {
    this.hasOne(models.Projeto, { foreignKey: 'CLIENTE_ID_PROJETO', as: 'projeto'} )
  }

}

module.exports = Cliente;