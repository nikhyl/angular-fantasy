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