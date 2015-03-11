angular.module('TaskKeeper').controller('NotesIndexController', function(Note, $scope){
  $scope.notes = Note.query();
  $scope.search = {};
});