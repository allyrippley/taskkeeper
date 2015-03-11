angular.module('TaskKeeper').controller('UsersIndexController', function(User, $scope){
  $scope.users = User.query();
});