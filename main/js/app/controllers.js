
//controller for dashboard
 campusControllers.controller('dashboardController', ['$scope','$http',
  function dashboardController($scope, $http) {
    console.log("Call dashboard controller..");
    $scope.AppName = 'College Name';
  }]);


//controller for facebook
 campusControllers.controller('FacebookContoller', ['$scope','$http',
  function FbController($scope, $http) {
    console.log("Call facebook controller..");
    $scope.AppName = 'Facebook';
    $scope.FacebookID = '1234567890';
    $http.get(' https://www.facebook.com/feeds/page.php?id=346068585530476&format=json').success(function(data) {
  	  	$scope.facebookFeed=data;
  	  	/*var compiledString = angular.element(theStringToCompile);
		$compile(compiledString )(scope, function(clonedElement, scope) {
			// do work and dom manipulation
		}*/
  	  	console.log($scope);
    });
    //$scope.html = '<a ng-click="click(1)" href="#">Click me</a>';
  }]);

 //Controller for RSS page
campusControllers.controller('rssFeedController', ['$scope', '$http',
  function($scope, $http) {
    console.log("Call RSS feed controller..");
  	$scope.AppName = 'RSS Feed';
  	$scope.color='red';
  	  $http.get('http://180.179.212.93/2013/mycampus/templateinfo/get/2').success(function(data) {
  	  	$scope.data=data;
  	  	localStorage.setItem('AppData',JSON.stringify(data));
  	  	console.log(data);
    });
  	   $http.get(' http://www.gousieagles.com//rss.aspx?tab=basketball&path=mbball').success(function(data) {
  	  	$scope.rssFeed=data;
  	  	console.log($scope);
    });
  }]);



