"use strict";
var models = require("../lib/model/db");

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.describeTable("Companies").then(function(attributes) {
            if (attributes.hasOwnProperty("hide_other_user_absences")) {
                return 1;
            }

            return queryInterface.addColumn(
                "Companies",
                "hide_other_user_absences",
                models.Company.attributes.hide_other_user_absences
            );
        });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.removeColumn(
            "Companies",
            "hide_other_user_absences"
        );
    }
};
