
var allImages = [];

// public/core.js
var app = angular.module('petricaApp', ['FlickrService','infinite-scroll','FBAngular']);

app.controller('MainCtrl', function(
	 $rootScope, 
     $scope) { 

    $scope.resultedImages = allImages;
    $scope.pageTitle = 'Search Flicker';


});
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

var FlickrService = angular.module('FlickrService', [])
.service('Flickr', function ($http) {

    this.search = function (word, page) { 
        	  	
        console.log('Page now: ' + page)  ;

        //console.log('WORD to search:' + word);

        if ( typeof word != 'undefined') {

    	    $http.jsonp('https://api.flickr.com/services/rest/?' + 
    		    'method=flickr.photos.search&'+
    		    'api_key=' + FLICKR_API_KEY + '&' + 
    		    'tags='  + word + '&' + 
    		    'nojsoncallback=1&' + 
    		    'jsoncallback=JSON_CALLBACK&' + 
    		    'per_page=50&' + 
    		    'format=json&'+
    		    'page=' + page)
    	        .success(function(data) {
                    // return data.photos.photo;
                    
                    for (var i = 0, len = data.photos.photo.length; i < len; i++) {
                                    
                    	// console.log(data.photos.photo[i]);
                    	allImages.push({ 
                    		thumbnailPath: "http://farm" + data.photos.photo[i].farm + 
                    		".static.flickr.com/" + 
                            data.photos.photo[i].server + 
                            "/" + data.photos.photo[i].id + "_" + data.photos.photo[i].secret + "_" + "t.jpg",
                            imageId : data.photos.photo[i].id
                    	});

                    }
    	        }).
                error(function (data) {
                    //$scope.data = "Request failed";
                    alert('Damn .. something went wrong...')
                });
            };
        } 

        
});