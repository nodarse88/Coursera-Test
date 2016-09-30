(function () {

	angular.module('freemarketApp', [])
	.constant('categoriesUrl', 'http://192.168.1.100:5500/categories')
	.constant('categoriesLocalUrl', 'categories.json')	
	.constant('featuresUrl', 'http://192.168.1.100:5500/shopping-features')
	.constant('featuresLocalUrl', 'shopping-features.json')
	.directive('navigationBar', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/navigationBar.html',
		};
	})
	.directive('footerBar', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/footerBar.html'
		};
	})
	.directive('carouselJumbotron', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/carouselJumbotron.html'
		};
	})
	.directive('downloadApp', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/downloadApp.html'
		};
	})
	.directive('mainFeatures', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/mainFeatures.html'
		};
	})
	.directive('mainCategories', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/mainCategories.html'
		};
	})
	.controller('CategoryCtrl', function ($scope, $http, categoriesLocalUrl) {

		$scope.categories = [];

		$http.get(categoriesLocalUrl)
		.success(function (data) {
			$scope.categories = data;
		})
		.error(function (error) {
			$scope.categoriesError = error;
		});

	})
	.controller('FeaturesCtrl', function ($scope, $http, featuresLocalUrl) {

		$scope.features = [];

		$http.get(featuresLocalUrl)
		.success(function (data) {
			$scope.features = data;
		})
		.error(function (error) {
			$scope.featuresError = error;
		});

	})
	.controller('FeaturedAdsCtrl', function ($http, $scope) {
		$scope.links = [];

		$http.get('./links.json')
		.success(function (data) {
			$scope.links = data;
		})
		.error(function (error) {
			$scope.linksError = error;
		});
	})
	.controller('JumboCarouselCtrl', function ($http, $scope) {
		$scope.carouselInterval = 3000;
		$scope.carouselItems = [];

		$http.get('./carousel.json')
		.success(function (data) {
			$scope.carouselItems = data;
		})
		.error(function (error) {
			$scope.carouselItemsError = error;
		});
		
		$scope.activeImage = 0;

		$scope.getActiveIndex = function (index) {
			return index == $scope.activeImage;
		};

	});
})();