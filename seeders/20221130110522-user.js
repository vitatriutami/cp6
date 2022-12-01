'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
      id: 1,
      username: 'Sabrina',
      password: '98765',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 2,
      username: 'Johny',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: 3,
      username: 'Jaemin',
      password: '23456',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', {id: [1, 2, 3]}, {});
    }
  };
