'use strict';

/**
 * Module dependencies.
 */
var organisations = require('../controllers/organisation.server.controller');
    // organisationsPolicy = require('../policies/organisation.server.policy');

module.exports = function (app) {
  // organisations collection routes
    app.route('/core/organisations/list_organisations')
        .post(organisations.list_organisations);
    app.route('/core/organisations/add_organisation')
        .post(organisations.add_organisation);
    app.route('/core/organisations/remove_organisation')
        .post(organisations.remove_organisation);
         app.route('/core/organisations/update_organisation')
        .post(organisations.update_organisation);
};
