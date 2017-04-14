'use strict';

//organisations service used for communicating with the organisations REST endpoints
angular.module('core').factory('Organisations', ['$resource',
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
