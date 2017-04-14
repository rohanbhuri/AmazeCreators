'use strict';

/**
 * Module dependencies.
 */
var organisations = require('../controllers/organisation.server.controller');

module.exports = function (app) {
  // organisations collection routes
  app.route('/api/organisations/list')
      .post(organisations.create);
};
