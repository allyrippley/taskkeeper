angular.module('TaskKeeper').factory('Category', function($resource){
  return $resource('/categories/:id');
});