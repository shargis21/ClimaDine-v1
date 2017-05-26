'use strict';

/**
 * @ngdoc service
 * @name climaDineV1App.citysearch
 * @description
 * # citysearch
 * Factory in the climaDineV1App.
 */
angular.module('climaDineV1App')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=25a5df8ebd32460734453c364ce1c8f7', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
