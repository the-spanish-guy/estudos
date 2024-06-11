const { Model, DataTypes } = require('sequelize');

class Categoria extends Model {
  static init(connection) {
    super.init({
      id_CATEGORIA: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_CATEGORIA: DataTypes.STRING,
    }, {
      sequelize: connection,
      freezeTableName: true,
      modelName: 'Categorias'
    })
  }
}

module.exports = Categoria;