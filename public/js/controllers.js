var controllers = angular.module('Controllers', []);

controllers.controller('NavCtrl', ['$scope', '$route', function($scope, $route){
	$scope.isActive = function(item){
		return item.url == $scope.currentUrl;
	};

	$scope.navItems = [
		{ title: 'Lists', url: '/lists' }
	];

	$scope.$on('$routeChangeSuccess', function(ev, current, prev){
		$scope.currentUrl = current.url;
	});
}]);