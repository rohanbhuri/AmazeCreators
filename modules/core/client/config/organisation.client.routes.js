'use strict';

// Setting up route
angular.module('organisations').config(['$stateProvider',
  function ($stateProvider) {
    // organisations state routing
    $stateProvider
      .state('organisations', {
        abstract: true,
        url: '/organisations',
        template: '<ui-view/>',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('organisations.list', {
        url: '',
        templateUrl: 'modules/organisations/views/list-organisations.client.view.html'
      })
      .state('organisations.create', {
        url: '/create',
        templateUrl: 'modules/organisations/views/create-organisation.client.view.html'
      })
      .state('organisations.view', {
        url: '/:organisationId',
        templateUrl: 'modules/organisations/views/view-organisation.client.view.html'
      })
      .state('organisations.edit', {
        url: '/:organisationId/edit',
        templateUrl: 'modules/organisations/views/edit-organisation.client.view.html'
      });
  }
]);
