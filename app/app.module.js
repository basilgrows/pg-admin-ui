angular.module('pg admin ui', ['templates', 'ui.router'])

// config stuff


// runtime stuff
.run(['$rootScope', 'AppService', function ($rootScope, AppService) {
	
	// attach the AppService object to the rootScope so that we can set ng-model to properties on it
	$rootScope.store = AppService;
    
    $rootScope.$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
        
        // in case you want to listen for state change events
        
    });
    
}]);
