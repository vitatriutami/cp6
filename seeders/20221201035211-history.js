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
     await queryInterface.bulkInsert('histories', [{
      id: 1,
      score: 44,
      level: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      score: 35,
      level: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      score: 22,
      level: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('histories', {id: [1, 2, 3]}, {});
    }
  };

