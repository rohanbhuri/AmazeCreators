'use strict';



angular.module('core').factory('OrganisationService', ['$resource',
    function($resource) {

        // console.log($resource);
        return $resource('/core/organisations', {}, {
            
            list_organisations:{method: 'POST', isArray: true ,url: '/core/organisations/list_organisations'},
            add_organisation:{method: 'POST' ,url: '/core/organisations/add_organisation'},        
            remove_organisation:{method: 'POST' ,url: '/core/organisations/remove_organisation'},
            update_organisation:{method: 'POST' ,url: '/core/organisations/update_organisation'},                            

        });
    }
]);
