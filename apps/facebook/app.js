
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