angular.module('pg admin ui', ['templates', 'ui.router', 'ngTouch', 'ngAnimate' ])

// config stuff


// runtime stuff
.run(['$rootScope', 'AppService', function ($rootScope, AppService) {
	
	// attach the AppService object to the rootScope so that we can set ng-model to properties on it
	$rootScope.store = AppService;
    
    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
        
        // in case you want to listen for state change events
        
    });
    
}]);


angular.module('pg admin ui')

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    // if you want html5 style urls
    //$locationProvider.html5Mode(true);
    
    // where to go when a route is not matched
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'pages/home/home.template.html',
            controller: 'HomeCtrl'
        })
        .state('other', {
            url: '/other/:id',
            templateUrl: 'pages/other/other.template.html',
            controller: 'OtherCtrl'
        })
        // yo ux-boilerplate:page DO NOT REMOVE
        ;

}]);

angular.module('pg admin ui')

.controller('HomeCtrl', ['$scope', function($scope) {
	
	$scope.name = "Calvin";
	
}]);

angular.module('pg admin ui')

.controller('OtherCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	
	$scope.id = $stateParams.id;
	
}]);

angular.module("pg admin ui")

// factories are services that return an object, rather than a function to call 'new' on
.factory('AppService', [/* no dependencies */ function() {
	
	// return an empty object to save data to across pages
	return {};
	
}]);

angular.module("pg admin ui")

.directive('nwSelect', function() {
	
	return {
		restrict: 'E', // only works when used as element <nw-select>
		scope: {
			model: '=' // sets $scope.model to the value of the 'model' attribute on <nw-select>
		}, // isolates the scope from being messed with, except for defined attributes
		transclude: true, // allows <options> in the <nw-select> to be transcluded to another spot in the template
		templateUrl: 'shared/directives/nw-select/nwSelect.template.html',
		// template: 'could define template directly in here as a string (good for small templates)',
		controller: ['$scope', function($scope) {
			// this particular directive doesn't need any controller code
		}],
		// controller: 'ControllerName' if you want to define it in a separate file
	};
	
});

//# sourceMappingURL=app.js.map