'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('DEV_PROJETO', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_DEV: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'devs', key: 'id_DEV' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_PROJETO: {
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
  }
};
