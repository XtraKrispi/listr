var listrApp = angular.module('listrApp', ['Controllers', 'ListsServices', 'ListsControllers']);

listrApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', { templateUrl: 'partials/home', url: '/'} )
		.when('/lists', { templateUrl: 'partials/lists/index', url: '/lists'});

	$locationProvider.html5Mode(true);
}]);