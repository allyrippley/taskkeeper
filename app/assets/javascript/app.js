angular.module('TaskKeeper', ['ngRoute', 'ngResource', "ngGravatar"]).config(function(GravatarProvider){
  GravatarProvider.setSize(100);
});