(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {

		$scope.lunch_menu = '';

		$scope.checkIfTooMuch = function () {
			var menu_items = $scope.lunch_menu.split(',');
			var length = menu_items.length;

			if ($scope.lunch_menu.length == 0) {
				$scope.lunch_message = 'Please enter data first';
			}
			else if (length <= 3) {
				$scope.lunch_message = 'Enjoy!';
			} else {
				$scope.lunch_message = 'Too much!';
			}
		};
	};
})();