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
