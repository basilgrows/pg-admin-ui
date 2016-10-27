angular.module('pg admin ui')

.controller('JobDetailsCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	
	$scope.id = $stateParams.id;
	
}]);