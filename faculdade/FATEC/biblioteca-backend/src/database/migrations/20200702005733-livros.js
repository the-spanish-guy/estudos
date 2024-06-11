'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('LIVROS', {
      id_LIVRO:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       NOME_LIVRO: {
        type: Sequelize.STRING,
        allowNull: false,
       },
       ANO_LANCAMENTO_LIVRO: {
         type: Sequelize.STRING(4),
         allowNull: false
       },
       ISBN: {
         type: Sequelize.STRING(45),
         allowNull: false,
         unique: true
       },
       IMAGE_LIVRO: {
         type: Sequelize.STRING,
         allowNull: true
       },
       EDICAO_LIVRO: {
         type: Sequelize.STRING(45),
         allowNull: true
       },
       STATUS_LIVRO: {
         type: Sequelize.STRING(1),
         allowNull: false
       },
       AUTOR_ID_LIVRO: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: { model: 'autors', key: 'id_AUTOR' },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE', 
       },
       EDITROA_ID_LIVRO: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: { model: 'editoras', key: 'id_EDITORA' },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
       },
       CATEGORIA_ID_LIVRO: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: { model: 'categorias', key: 'id_CATEGORIA' },
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
    await queryInterface.dropTable('LIVROS')
  }
};
