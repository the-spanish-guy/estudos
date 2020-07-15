const { Model, DataTypes, Sequelize } = require('sequelize');

class Estoque extends Model {
  static init(connection) {
    super.init({
      id_ESTOQUE: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      UND_ITEM: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      tableName: 'ESTOQUES',
      modelName: 'Estoques'
    })
  }

  static associate(models) {
    this.belongsTo(models.Livro , { foreignKey: 'LIVRO_ID_ESTOQUE', as: 'livros'});
    this.hasMany(models.Emprestado, { foreignKey: 'ESTOQUE_id_ITEM', as: 'item'} )
  }
}

module.exports = Estoque;