angular.module('weatherApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, CurrentWeather, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.currentWeather = CurrentWeather.query({
        cityID: $routeParams.cityID
    });

    $scope.saveCity = function(city){
        var cityData = {
            'name': city.name,
            'id': city.id
        };
        if (!$localStorage.savedCities){
            $localStorage.savedCities = [cityData];
        } else {
            // Check to make sure we haven't already saved the city.
            var save = true;
            for (var i=0; i < $localStorage.savedCities.length; i++){
                if ($localStorage.savedCities[i].id === cityData.id) {
                    // this is a duplicate, so don't save
                    save = false;
                }
            }
            if (save===true){
                $localStorage.savedCities.push(cityData);
                $scope.citySaved = {
                    'success': true
                };
            } else {
                console.log('city already saved');
                $scope.citySaved = {
                    'duplicate': true
                };
            }
        }
    };
  });
