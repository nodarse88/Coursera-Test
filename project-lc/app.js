(function () {
	angular.module('freemarketApp', [])
	.constant('categoriesUrl', 'http://192.168.1.100:5500/categories')
	.constant('featuresUrl', 'http://192.168.1.100:5500/shopping-features')
	.controller('CategoryCtrl', function ($scope, $http, categoriesUrl) {

		$scope.categories = [];

		$http.get(categoriesUrl)
		.success(function (data) {
			$scope.categories = data;
		})
		.error(function (error) {
			$scope.categoriesError = error;
		});

	})
	.controller('FeaturesCtrl', function ($scope, $http, featuresUrl) {

		$scope.features = [];

		$http.get(featuresUrl)
		.success(function (data) {
			$scope.features = data;
		})
		.error(function (error) {
			$scope.featuresError = error;
		});

	})
	.controller('SponsoredLinksCtrl', function ($scope) {
		$scope.links = [{
			name: "Item1",
			price: 10.99,
			image: 'app/images/sell01-350x350.jpg'
		},{
			name: "Item2",
			price: 10.99,
			image: 'app/images/sell02-350x350.jpg'
		},{
			name: "Item3",
			price: 10.99,
			image: 'app/images/sell03-350x350.jpg'
		},{
			name: "Item4",
			price: 10.99,
			image: 'app/images/sell04-350x350.jpg'
		},{
			name: "Item5",
			price: 10.99,
			image: 'app/images/sell01-350x350.jpg'
		},{
			name: "Item6",
			price: 10.99,
			image: 'app/images/sell02-350x350.jpg'
		},{
			name: "Item7",
			price: 10.99,
			image: 'app/images/sell03-350x350.jpg'
		},{
			name: "Item8",
			price: 10.99,
			image: 'app/images/sell04-350x350.jpg'
		}];
	})
	.controller('JumboCarouselCtrl', function ($scope) {
		$scope.carouselInterval = 3000;
		$scope.carouselItems = [
			{ image: 'app/images/image01-1200x675.jpg', 
				title: 'Kool Tak Foam', 
				subtitle: 'Let the creative fun begin!' }, 
			{ image: 'app/images/image02-1200x675.jpg', 
				title: 'Google Nexus 7', 
				subtitle: '"a mutual goal to make the most successful Android tablet ever and we are very confident in our ability to achieve that."' },
			{ image: 'app/images/image03-1200x675.jpg', 
				title: 'Google Home', 
				subtitle: 'Google Home lets you control your video content, too.' },
			{ image: 'app/images/image04-1200x675.jpg', 
				title: 'Chromecast HDMI Streaming Media Player', 
				subtitle: 'Stream online video, music and more to your TV using your smartphone, tablet, or laptop' }];
		$scope.activeImage = 0;

		$scope.getActiveIndex = function (index) {
			return index == $scope.activeImage;
		};

	});
})();