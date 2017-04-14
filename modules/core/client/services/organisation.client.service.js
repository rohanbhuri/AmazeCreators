'use strict';



angular.module('core').factory('OrganisationService', ['$resource',
    function($resource) {

        // console.log($resource);
        return $resource('/api/v1/organisation/', {}, {
            
            // fetch_device_list:{method: 'POST' ,isArray: true ,url: '/api/v1/admin/sms/fetch_device_list'},
            // send_message:{method: 'POST' ,url: '/api/v1/admin/sms/send_message'},            
            

        });
    }
]);
