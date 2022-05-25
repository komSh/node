'use strict';
const path = require("path");
const fs = require("fs");
const { parse } = require('csv-parse');
const { rows } = require("pg/lib/defaults");
const data_imp  = require("../import.js");



module.exports = {
  async up (queryInterface, Sequelize) {
    var test = await data_imp();
    console.log("testing" , test);
   return queryInterface.bulkInsert('Users', test); 
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
