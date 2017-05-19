'use strict';

/**
 * @ngdoc function
 * @name climaDineV1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the climaDineV1App
 */
angular.module('climaDineV1App')
    .controller('MainCtrl', function ($scope, current) {
      $scope.current = current.query();

      $scope.refreshCurrent = function(){
          $scope.current = current.query({
                location: $scope.location
          });
      };
    });
