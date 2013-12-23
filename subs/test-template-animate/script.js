function Ctrl($scope) {
  $scope.templates =
    [ { name: 'footer.tmpl', url: 'footer.tmpl'}
    , { name: 'header.tmpl', url: 'header.tmpl'} ];
  $scope.template = $scope.templates[1];
}