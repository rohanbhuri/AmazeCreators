'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise('not-found');

    // Home state routing
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/views/home.client.view.html'
      })
      
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
        templateUrl: 'modules/core/views/list-organisation.client.view.html'
      })
      .state('organisations.create', {
        url: '/create',
        templateUrl: 'modules/core/views/create-organisation.client.view.html'
      })
      .state('organisations.view', {
        url: '/:organisationId',
        templateUrl: 'modules/core/views/view-organisation.client.view.html'
      })
      .state('organisations.edit', {
        url: '/:organisationId/edit',
        templateUrl: 'modules/core/views/edit-organisation.client.view.html'
      })

      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/views/404.client.view.html'
      });
  }
]);
