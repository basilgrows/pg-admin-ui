angular.module('pg admin ui')

.controller('JobLogCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	
	$scope.id = $stateParams.id;
	
}]);