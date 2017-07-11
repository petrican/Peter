app.controller('SearchCtrl', function ($scope, Flickr) {
 
    $scope.page = 1;
    $scope.lastKeyword = '';

	// The function that will be executed on button click 
	$scope.performSearch = function() {
        if ($scope.lastKeyword == $scope.$parent.keywords) {
        	$scope.page += 1;
        } else {
        	$scope.page = 1;
            $scope.lastKeyword = $scope.$parent.keywords;

        }

        if ( typeof $scope.$parent.keywords != 'undefined') {
            Flickr.search($scope.$parent.keywords, $scope.page);
        }
        
    };

    $scope.performClear = function() {
        window.location.href = '/';
    };
});
