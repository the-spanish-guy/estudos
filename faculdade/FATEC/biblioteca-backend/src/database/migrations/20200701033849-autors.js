'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.createTable('AUTORS', {
       id_AUTOR:{ 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       NOME_AUTOR: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('AUTORS');
  }
};
