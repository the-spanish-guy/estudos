'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('ENTREGUE', {
      id_ENTREGUE: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      PROJETOS_ID_ENTREGUE: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'projetos', key: 'id_PROJETO' },
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
    await queryInterface.dropTable('ENTREGUE');
  }
};
