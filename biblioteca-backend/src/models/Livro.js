const { Model, DataTypes } = require('sequelize');
// const Autor = require('./Autor');
// const Editora = require('./Editora');
// const Categoria = require('./Categoria');

class Livro extends Model {
  static init(connection) {
    super.init({
      id_LIVRO: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_LIVRO: DataTypes.STRING,
      ANO_LANCAMENTO_LIVRO: DataTypes.STRING(4),
      ISBN: DataTypes.STRING(45),
      IMAGE_LIVRO: DataTypes.STRING,
      IMAGE_LIVRO_URL: {
        type: DataTypes.VIRTUAL,
        get() {
          return`http://192.168.0.30:3333/files/${this.IMAGE_LIVRO}`
        }
      },
      EDICAO_LIVRO: DataTypes.STRING(45),
      STATUS_LIVRO: DataTypes.STRING(1),
      AUTOR_ID_LIVRO: DataTypes.INTEGER,
      EDITROA_ID_LIVRO: DataTypes.INTEGER,
      CATEGORIA_ID_LIVRO: DataTypes.INTEGER,
    }, {
      sequelize: connection,
      tableName: 'LIVROS',
      modelName: 'Livros'
    })
  }

  static associate(models) {
    this.belongsTo(models.Autor, { foreignKey: 'AUTOR_ID_LIVRO', as: 'autores' });
    this.belongsTo(models.Editora, { foreignKey: 'EDITROA_ID_LIVRO', as: 'editora' });
    this.belongsTo(models.Categoria, { foreignKey: 'CATEGORIA_ID_LIVRO', as: 'categorias' });

    this.hasMany(models.Estoque, { foreignKey: 'LIVRO_ID_ESTOQUE', as: 'estoques' });
    this.hasOne(models.Autor)
    this.hasOne(models.Editora)
    this.hasMany(models.Categoria)
  }
}

module.exports = Livro;