//Directives go here
AngularFramework.directive('dynamic', function ($compile) {
  return {
    restrict: '',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});