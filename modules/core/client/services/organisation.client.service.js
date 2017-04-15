'use strict';



angular.module('core').factory('OrganisationService', ['$resource',
    function($resource) {

        // console.log($resource);
        return $resource('/organisation/organisations', {}, {
            
            list:{method: 'GET' ,isArray: true ,url: '/organisation/organisations/list'},
            // send_message:{method: 'POST' ,url: '/api/v1/admin/sms/send_message'},            
            

        });
    }
]);
