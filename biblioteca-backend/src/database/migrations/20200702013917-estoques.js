'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('ESTOQUES', { 
      id_ESTOQUE: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      UND_ITEM: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      LIVRO_ID_ESTOQUE: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'livros', key: 'id_LIVRO' },
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
    await queryInterface.dropTable('ESTOQUES');
  }
};
