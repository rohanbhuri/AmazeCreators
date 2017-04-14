'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  // organisationsPolicy = require('../policies/organisation.server.policy'),
  // organisations = require('../controllers/organisation.server.controller');

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);


  //  app.route('/api/organisations').all(organisationsPolicy.isAllowed)
  //   .get(organisations.list)
  //   .post(organisations.create);

  // // Single organisation routes
  // app.route('/api/organisations/:organisationId').all(organisationsPolicy.isAllowed)
  //   .get(organisations.read)
  //   .put(organisations.update)
  //   .delete(organisations.delete);

  // // Finish by binding the organisation middleware
  // app.param('organisationId', organisations.organisationByID);
};
