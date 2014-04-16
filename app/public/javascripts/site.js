var site = angular.module('site', ['ngRoute']);

site.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        console.log("inside config route routeProvider");
        $routeProvider.when('/create', {
            templateUrl: 'views/contents/create.html',
            controller: 'primaryController'
        });
        $routeProvider.when('/search', {
            templateUrl: 'views/contents/search.html',
            controller: 'primaryController'
        });
        $routeProvider.when('/show', {
            templateUrl: 'views/contents/show.html',
            controller: 'primaryController'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
        console.log($routeProvider.$get.forEach(function(d) {
            console.log(d)
        }));
    }
]);
/*
site.controller('primaryController', ['$route', '$routeParams', '$location',
    function($route, $routeParams, $location) {
        $scope.a = 1;
        $scope.b = 2;
        this.name = "primaryController";
        this.params = $routeParams;
        console.log($location)
    }]);*/
site.controller('primaryController', ['$route', '$routeParams', '$location',
    function($route, $routeParams, $location) {
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
        console.log("Location value = " + JSON.stringify($location.path()));
        console.log("route param = " + JSON.stringify($route.routes));
    }
]);
console.lod("log... " + JSON.stringify(site));