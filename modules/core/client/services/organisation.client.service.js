'use strict';

//organisations service used for communicating with the organisations REST endpoints
angular.module('organisations').factory('organisations', ['$resource',
  function ($resource) {
    return $resource('api/organisations/:organisationId', {
      organisationId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
