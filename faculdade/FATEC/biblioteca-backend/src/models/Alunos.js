const { Model, DataTypes, Sequelize } = require('sequelize');

class Aluno extends Model {
  static init(connection) {
    super.init({
      id_ALUNO: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      NOME_ALUNO: DataTypes.STRING,
      STATUS_ALUNO: DataTypes.STRING(1),
    }, {
      sequelize: connection,
      tableName: 'ALUNOS',
      modelName: 'Alunos'
    })
  }

  static associate(models) {
    this.hasMany(models.Emprestado, { foreignKey: 'ALUNO_ID_EMPRESTADO', as: 'emprestados'} )
  }

}

module.exports = Aluno;