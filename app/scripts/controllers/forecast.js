'use strict';

/**
 * @ngdoc function
 * @name climaDineV1App.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the climaDineV1App
 */
angular.module('climaDineV1App')
    .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
      $scope.cityID = $routeParams.cityID;

      $scope.forecastData = forecast.query({
          cityID: $routeParams.cityID
      });
    });
