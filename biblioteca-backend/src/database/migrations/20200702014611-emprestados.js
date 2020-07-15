'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('EMPRESTADOS', { 
      id_EMPRESTADO: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      ENTRADA: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      SAIDA: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      ALUNO_ID_EMPRESTADO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alunos', key: 'id_ALUNO' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ESTOQUE_ID_ITEM: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'estoques', key: 'id_ESTOQUE' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('EMPRESTADOS');
  }
};
