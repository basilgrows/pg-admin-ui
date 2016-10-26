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