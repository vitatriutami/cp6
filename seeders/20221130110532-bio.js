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
     await queryInterface.bulkInsert('bios', [{
      id: 1,
      email: 'sabrina123@gmail.com',
      fullname: 'Sabrina Aulia',
      age: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      email: 'suhj@gmail.com',
      fullname: 'Johny Suh',
      age: 27,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      email: 'jaemin0813@gmail.com',
      fullname: 'Na Jaemin',
      age: 22,
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
     await queryInterface.bulkDelete('bios', {id: [1, 2, 3]}, {});
    }
  };
