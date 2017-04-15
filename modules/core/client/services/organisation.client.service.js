'use strict';



angular.module('core').factory('OrganisationService', ['$resource',
    function($resource) {

        // console.log($resource);
        return $resource('/core/organisations', {}, {
            
            list:{method: 'GET' ,url: '/core/organisations/list'},
            // send_message:{method: 'POST' ,url: '/api/v1/admin/sms/send_message'},            
            

        });
    }
]);
