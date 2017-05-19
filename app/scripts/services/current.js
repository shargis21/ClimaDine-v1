'use strict';

/**
 * @ngdoc service
 * @name climaDineV1App.current
 * @description
 * # current
 * Factory in the climaDineV1App.
 */
angular.module('climaDineV1App')
    .factory('current', function ($resource) {
      // Service logic
      // ...

      // Public API here
      return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=25a5df8ebd32460734453c364ce1c8f7', {}, {
        query: {
          method:'GET',
          params:{
            location: 'Seattle,us'
          },
          isArray:false
        }
      });
    });
