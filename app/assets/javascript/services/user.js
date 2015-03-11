angular.module('TaskKeeper').factory('User', function($resource){
  return $resource('/users/:id');
});