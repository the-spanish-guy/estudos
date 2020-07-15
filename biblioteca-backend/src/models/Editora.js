const { Model, DataTypes } = require('sequelize');

class Editora extends Model {
  static init(connection) {
    super.init({
      id_EDITORA: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_EDITORA: DataTypes.STRING,
    }, {
      sequelize: connection,
      modelName: 'Editoras'
    })
  }
}

module.exports = Editora;