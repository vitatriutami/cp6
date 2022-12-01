'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
      queryInterface.addColumn('users', 'bioId', { 
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('users', 'historyId', { 
        type: Sequelize.INTEGER,
      })
     ]);
  },

  down: function (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('users', 'bioId'),
      queryInterface.removeColumn('users', 'historyId')
    ]);
  }
};