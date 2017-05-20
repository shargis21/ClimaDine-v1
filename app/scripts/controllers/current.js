'use strict';

/**
 * @ngdoc function
 * @name climaDineV1App.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the climaDineV1App
 */
angular.module('climaDineV1App')
    .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
      $scope.cityID = $routeParams.cityID;

      $scope.currentWeather = current.query({
          cityID: $routeParams.cityID
      });
    });
