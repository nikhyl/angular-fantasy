'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        //ng animate
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        //ng animate
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    //
    .controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee) {
        debugger;
        $scope.employees = Employee.query();
    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }])
    .controller('EmployeeListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.AppName = 'Facebook';
        $scope.FacebookID = '1234567890';
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]);

