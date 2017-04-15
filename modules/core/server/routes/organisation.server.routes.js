'use strict';

/**
 * Module dependencies.
 */
var organisations = require('../controllers/organisation.server.controller'),
    organisationsPolicy = require('../policies/organisation.server.policy');

module.exports = function (app) {
  // organisations collection routes
   app.route('/organisation/organisations/list')
        .get(organisations.list);
};
