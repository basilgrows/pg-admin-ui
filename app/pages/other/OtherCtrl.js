angular.module('pg admin ui')

.controller('OtherCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
	
	$scope.id = $stateParams.id;
	
}]);