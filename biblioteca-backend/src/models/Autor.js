const { Model, DataTypes } = require('sequelize');

class Autor extends Model {
  static init(connection) {
    super.init({
      id_AUTOR: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_AUTOR: DataTypes.STRING,
    }, {
      sequelize: connection,
      freezeTableName: true,
      modelName: 'Autors'
    })
  }

  static associate(models) {
    this.hasMany(models.Livro, { foreignKey: 'AUTOR_ID_LIVRO', as: 'livro_autor' })
  }
}

module.exports = Autor;