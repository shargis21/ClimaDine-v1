"use strict";angular.module("climaDineV1App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("climaDineV1App").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=b.find(),a.storage=c,a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("climaDineV1App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("climaDineV1App").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=25a5df8ebd32460734453c364ce1c8f7",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("climaDineV1App").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&type=like&units=imperial&mode=json&APPID=25a5df8ebd32460734453c364ce1c8f7",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("climaDineV1App").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.cityID=b.cityID,a.currentWeather=c.query({cityID:b.cityID}),a.currentWeatherIcon={200:{label:"thunderstorm with light rain",icon:"storm-showers"},201:{label:"thunderstorm with rain",icon:"storm-showers"},202:{label:"thunderstorm with heavy rain",icon:"storm-showers"},210:{label:"light thunderstorm",icon:"storm-showers"},211:{label:"thunderstorm",icon:"thunderstorm"},212:{label:"heavy thunderstorm",icon:"thunderstorm"},221:{label:"ragged thunderstorm",icon:"thunderstorm"},230:{label:"thunderstorm with light drizzle",icon:"storm-showers"},231:{label:"thunderstorm with drizzle",icon:"storm-showers"},232:{label:"thunderstorm with heavy drizzle",icon:"storm-showers"},300:{label:"light intensity drizzle",icon:"sprinkle"},301:{label:"drizzle",icon:"sprinkle"},302:{label:"heavy intensity drizzle",icon:"sprinkle"},310:{label:"light intensity drizzle rain",icon:"sprinkle"},311:{label:"drizzle rain",icon:"sprinkle"},312:{label:"heavy intensity drizzle rain",icon:"sprinkle"},313:{label:"shower rain and drizzle",icon:"sprinkle"},314:{label:"heavy shower rain and drizzle",icon:"sprinkle"},321:{label:"shower drizzle",icon:"sprinkle"},500:{label:"light rain",icon:"rain"},501:{label:"moderate rain",icon:"rain"},502:{label:"heavy intensity rain",icon:"rain"},503:{label:"very heavy rain",icon:"rain"},504:{label:"extreme rain",icon:"rain"},511:{label:"freezing rain",icon:"rain-mix"},520:{label:"light intensity shower rain",icon:"showers"},521:{label:"shower rain",icon:"showers"},522:{label:"heavy intensity shower rain",icon:"showers"},531:{label:"ragged shower rain",icon:"showers"},600:{label:"light snow",icon:"snow"},601:{label:"snow",icon:"snow"},602:{label:"heavy snow",icon:"snow"},611:{label:"sleet",icon:"sleet"},612:{label:"shower sleet",icon:"sleet"},615:{label:"light rain and snow",icon:"rain-mix"},616:{label:"rain and snow",icon:"rain-mix"},620:{label:"light shower snow",icon:"rain-mix"},621:{label:"shower snow",icon:"rain-mix"},622:{label:"heavy shower snow",icon:"rain-mix"},701:{label:"mist",icon:"sprinkle"},711:{label:"smoke",icon:"smoke"},721:{label:"haze",icon:"day-haze"},731:{label:"sand, dust whirls",icon:"cloudy-gusts"},741:{label:"fog",icon:"fog"},751:{label:"sand",icon:"cloudy-gusts"},761:{label:"dust",icon:"dust"},762:{label:"volcanic ash",icon:"smog"},771:{label:"squalls",icon:"day-windy"},781:{label:"tornado",icon:"tornado"},800:{label:"clear sky",icon:"sunny"},801:{label:"few clouds",icon:"cloudy"},802:{label:"scattered clouds",icon:"cloudy"},803:{label:"broken clouds",icon:"cloudy"},804:{label:"overcast clouds",icon:"wi-day-lightning"},900:{label:"tornado",icon:"tornado"},901:{label:"tropical storm",icon:"hurricane"},902:{label:"hurricane",icon:"hurricane"},903:{label:"cold",icon:"snowflake-cold"},904:{label:"hot",icon:"hot"},905:{label:"windy",icon:"windy"},906:{label:"hail",icon:"hail"},951:{label:"calm",icon:"sunny"},952:{label:"light breeze",icon:"cloudy-gusts"},953:{label:"gentle breeze",icon:"cloudy-gusts"},954:{label:"moderate breeze",icon:"cloudy-gusts"},955:{label:"fresh breeze",icon:"cloudy-gusts"},956:{label:"strong breeze",icon:"cloudy-gusts"},957:{label:"high wind, near gale",icon:"cloudy-gusts"},958:{label:"gale",icon:"cloudy-gusts"},959:{label:"severe gale",icon:"cloudy-gusts"},960:{label:"storm",icon:"thunderstorm"},961:{label:"violent storm",icon:"thunderstorm"},962:{label:"hurricane",icon:"cloudy-gusts"}},a.saveCity=function(b){var c={name:b.name,id:b.id};if(d.savedCities){for(var e=!0,f=0;f<d.savedCities.length;f++)d.savedCities[f].id===c.id&&(e=!1);e===!0?(d.savedCities.push(c),a.citySaved={success:!0}):(console.log("city already saved"),a.citySaved={duplicate:!0})}else d.savedCities=[c]}}]),angular.module("climaDineV1App").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=25a5df8ebd32460734453c364ce1c8f7",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("climaDineV1App").controller("ForecastCtrl",["$scope","$routeParams","forecast",function(a,b,c){a.cityID=b.cityID,a.forecastData=c.query({cityID:b.cityID})}]),angular.module("climaDineV1App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/current.html",'<h1>Current Weather for {{currentWeather.name}}</h1> <p ng-if="!citySaved"><button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save City</button></p> <div ng-messages="citySaved"> <p class="city-saved-alert bg-success text-success" ng-message="success"> {{currentWeather.name}} has been saved to your list of cities. </p> <p class="city-saved-alert bg-warning text-warning" ng-message="duplicate"> {{currentWeather.name}} has already been saved to your list of cities. </p> </div> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> <div class="weather-icon"><i style="font-size: 5em" class="wi {{currentWeatherIcon[currentWeather.weather[0].id].icon}}"></i></div> <p><a ng-href="#!/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 16-day Forecast</a></p>'),a.put("views/forecast.html",'<h1>16-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat="prediction in forecastData.list" class="weather-forecast"> <dt>Forecast for {{weather.dt*1000 | date:\'MMM dd, yyyy\'}}</dt> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </dl> <p><a ng-href="#!/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p>'),a.put("views/main.html",'<div ng-app ng-controller="MainCtrl"> <div class="jumbotron"> <h1>Search Your City</h1> <h4>What\'s the weather like where you\'re headed?</h4> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find City</button> </p> </div> <div ng-if="searchQuery"> <p class="lead">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat="city in citiesFound.list"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href="#!/current/{{city.id}}" class="btn btn-lg btn-primary">View Weather</a></dd> </dl> </div> </p> </div> <div ng-if="storage.savedCities"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="#!/current/{{city.id}}" class="btn btn-lg btn-link">{{city.name}}</a> </li> </ul> </div> </div>')}]);