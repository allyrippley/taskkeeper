angular.module('TaskKeeper').controller('UsersShowController', function(User, $scope, $routeParams){
  $scope.user = User.get({id: $routeParams.id});
});