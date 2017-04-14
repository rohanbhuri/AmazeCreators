'use strict';

// organisations controller
angular.module('organisations').controller('organisationsController', ['$scope', '$stateParams', '$location', 'Authentication', 'organisations',
  function ($scope, $stateParams, $location, Authentication, organisations) {
    $scope.authentication = Authentication;

    // Create new organisation
    $scope.create = function () {
      // Create new organisation object
      var organisation = new organisations({
        title: this.title,
        content: this.content
      });

      // Redirect after save
      organisation.$save(function (response) {
        $location.path('organisations/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing organisation
    $scope.remove = function (organisation) {
      if (organisation) {
        organisation.$remove();

        for (var i in $scope.organisations) {
          if ($scope.organisations[i] === organisation) {
            $scope.organisations.splice(i, 1);
          }
        }
      } else {
        $scope.organisation.$remove(function () {
          $location.path('organisations');
        });
      }
    };

    // Update existing organisation
    $scope.update = function () {
      var organisation = $scope.organisation;

      organisation.$update(function () {
        $location.path('organisations/' + organisation._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of organisations
    $scope.find = function () {
      $scope.organisations = organisations.query();
    };

    // Find existing organisation
    $scope.findOne = function () {
      $scope.organisation = organisations.get({
        organisationId: $stateParams.organisationId
      });
    };
  }
]);