'use strict';

/**
 * @ngdoc function
 * @name climaDineV1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the climaDineV1App
 */
angular.module('climaDineV1App')
    .controller('MainCtrl', function ($scope, citysearch) {
      $scope.citiesFound = citysearch.find();

      $scope.findCities = function(){
          $scope.citiesFound = citysearch.find({
              query: $scope.location
          });
          $scope.searchQuery = $scope.location;
      };
    });
