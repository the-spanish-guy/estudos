const { Model, DataTypes, Sequelize } = require('sequelize');

class Emprestado extends Model {
  static init(connection) {
    super.init({
      id_EMPRESTADO: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      ENTRADA: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      },
      SAIDA: DataTypes.DATEONLY,
      ESTOQUE_ID_ITEM: DataTypes.INTEGER
    }, {
      sequelize: connection,
      freezeTableName: true,
      modelName: 'Emprestados'
    })
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'ALUNO_ID_EMPRESTADO', as: 'aluno' });
    this.belongsTo(models.Estoque, { foreignKey: 'ESTOQUE_id_ITEM', as: 'item' });
  }
}

module.exports = Emprestado;