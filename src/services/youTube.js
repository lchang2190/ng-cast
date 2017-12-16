angular.module('video-player')
.service('youTube', function($http) { 

  this.searchYoutube = function(query, cb) { 
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: YOUTUBE_API_KEY,
        q: 'cats',
        part: 'snippet',
        maxResults: 8,
        type: 'video',
        videoEmbeddable: true
      }    
    }).then(function successCallback(data) {
      var results = data.items;
      console.log('success!');
    }, function errorCallback(data) {
      console.log('failure!');      
    });
  };
});
