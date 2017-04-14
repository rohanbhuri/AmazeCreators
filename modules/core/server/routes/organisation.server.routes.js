'use strict';

/**
 * Module dependencies.
 */
var organisationsPolicy = require('../policies/organisation.server.policy'),
  organisations = require('../controllers/organisation.server.controller');

module.exports = function (app) {
  // organisations collection routes
  app.route('/api/organisations').all(organisationsPolicy.isAllowed)
    .get(organisations.list)
    .post(organisations.create);

  // Single organisation routes
  app.route('/api/organisations/:organisationId').all(organisationsPolicy.isAllowed)
    .get(organisations.read)
    .put(organisations.update)
    .delete(organisations.delete);

  // Finish by binding the organisation middleware
  app.param('organisationId', organisations.organisationByID);
};
