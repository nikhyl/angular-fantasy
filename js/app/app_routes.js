//Route configuration
//Load files before calling a controller??
campusApp.config(['$routeProvider',
  function($routeProvider) {
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
      when('',{
        templateUrl: 'apps/dashboard/partial.html',
        controller: 'dashboardController'
      }).
      when('/rssFeed/:rssFeedId',{
        action: "splash.home"
      }).
      otherwise({
        redirectTo: ''
      });
  }]);