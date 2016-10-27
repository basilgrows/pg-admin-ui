angular.module('pg admin ui')

.controller('NewJobCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	
	$scope.id = $stateParams.id;
	
}]);