'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('ALUNOS', { 
      id_ALUNO: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      NOME_ALUNO: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      STATUS_ALUNO: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      createdAt: {
       type: Sequelize.DATE,
       allowNull: false
      },
      updatedAt: {
       type: Sequelize.DATE,
       allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('ALUNOS');
  }
};
