var site= angular.module('site',['ngRoute']);

site.configure(['$routeProvider', function($routeProvider){
	$routeProvider.when('/create',{templateUrl: 'contents/create', controller: 'createController'});
	$routeProvider.when('/search',{templateUrl: 'contents/search', controller: 'searchController'});
	$routeProvider.when('/show',{templateUrl: 'contents/show', controller: 'showController'});
	$routeProvider.otherwise({redirectTo: '/create'});
}]);