var listsControllers = angular.module('ListsControllers', ['ListsServices']);

listsControllers.controller('ListsCtrl', ['$scope', 'ListService', function($scope, ListService){

	$scope.lists = ListService.getAllLists();

}]);