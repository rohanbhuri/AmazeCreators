'use strict';

// organisations controller
angular.module('core').controller('organisationsController', ['$scope', '$stateParams', '$location', 'Authentication', 'OrganisationService',
  function ($scope, $stateParams, $location, Authentication, OrganisationService) {
    $scope.authentication = Authentication;

    $scope.organisations=[];
$scope.list = function(){
   OrganisationService.list_organisations(function(response) {
                  console.log(response);
                  $scope.organisations=response;
                });
};
$scope.edit = function(organisation_title,organisation_content){
  $scope.title=organisation_title;
  $scope.content=organisation_content;
  // console.log($scope.title);
};
$scope.add = function(title,content){
  console.log(title);
  console.log(content);
  
};





    // // Create new organisation
    // $scope.create = function () {
    //   // Create new organisation object
    //   var organisation = new Organisations({
    //     title: this.title,
    //     content: this.content
    //   });

    //   // Redirect after save
    //   organisation.$save(function (response) {
    //     $location.path('organisations/' + response._id);

    //     // Clear form fields
    //     $scope.title = '';
    //     $scope.content = '';
    //   }, function (errorResponse) {
    //     $scope.error = errorResponse.data.message;
    //   });
    // };

    // // Remove existing organisation
    // $scope.remove = function (organisation) {
    //   if (organisation) {
    //     organisation.$remove();

    //     for (var i in $scope.organisations) {
    //       if ($scope.organisations[i] === organisation) {
    //         $scope.organisations.splice(i, 1);
    //       }
    //     }
    //   } else {
    //     $scope.organisation.$remove(function () {
    //       $location.path('organisations');
    //     });
    //   }
    // };

    // // Update existing organisation
    // $scope.update = function () {
    //   var organisation = $scope.organisation;

    //   organisation.$update(function () {
    //     $location.path('organisations/' + organisation._id);
    //   }, function (errorResponse) {
    //     $scope.error = errorResponse.data.message;
    //   });
    // };

    // // Find a list of organisations
    // $scope.find = function () {
    //   $scope.organisations = Organisations.query();
    // };

    // // Find existing organisation
    // $scope.findOne = function () {
    //   $scope.organisation = Organisations.get({
    //     organisationId: $stateParams.organisationId
    //   });
    // };
  }
]);
