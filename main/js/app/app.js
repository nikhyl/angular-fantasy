//Author: Nikhil 
'use strict';

//App controllers
var campusControllers = angular.module('campusControllers', []);

//services, global variables
var AngularFramework = angular.module('AngularFramework', [
   'ngTouch',
   'ngRoute',
   'ngAnimate',
   'campusControllers'
]).
config(['$routeProvider', function ($routeProvider) {
     $routeProvider.
      when('/facebook', {
        //instead of template URL document.getElementById('dvFacebook');
        templateUrl: 'apps/facebook/partial.html',
        controller: 'FacebookContoller'
      }).
      /*when('/rssFeed/:rssFeedId', {
        templateUrl: 'rssfeed/partial.html',
        controller: 'rssFeedController'
      }).*/
      when('/rssFeed/', {
        templateUrl: 'apps/rssfeed/partial.html',
        controller: 'rssFeedController'
      }).
      when('/dashboard/',{
        templateUrl: 'apps/dashboard/partial.html',
        controller: 'dashboardController'
      }).
      otherwise({
        redirectTo: ''
      });
}]);