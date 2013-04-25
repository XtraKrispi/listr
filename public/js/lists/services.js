var listsServices = angular.module('ListsServices', []);

listsServices.factory('ListService', [function(){
	var lists = [
		{
			title: 'List 1', createdBy: 'Mike', createdOn: '2013-04-25', items: [
				{title: 'Item 1', description: 'This is item 1'}
			]
		}
	];

	return {
		getAllLists: function(){
			return lists;
		}
	};

}]);