//Route configuration
//Load files before calling a controller??
campusApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/facebook', {
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
      otherwise({
        redirectTo: ''
      });
  }]);