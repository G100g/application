'use strict';

var models = require('../lib/model/db');

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.describeTable('Companies').then(function(attributes){

      if (attributes.hasOwnProperty('language')) {
        return 1;
      }

      return queryInterface.addColumn(
        'Companies',
        'language',
        models.Company.attributes.language
      );
    });

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Companies', 'language');
  }
};
