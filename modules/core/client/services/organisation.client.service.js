'use strict';



angular.module('core').factory('OrganisationService', ['$resource',
    function($resource) {

        // console.log($resource);
        return $resource('/core/organisations', {}, {
            
            list_organisations:{method: 'POST', isArray: true ,url: '/core/organisations/list_organisations'},
            // send_message:{method: 'POST' ,url: '/api/v1/admin/sms/send_message'},            
            

        });
    }
]);
