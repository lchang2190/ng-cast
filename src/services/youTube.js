angular.module('video-player')
.service('youTube', function($http) { 

  this.searchYoutube = function(query, cb) { 
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      }    
    }).then(function (data) {
      var results = data.data.items;
      cb(results);
      console.log('success!');
    }, function (data) {
      console.log('failure!');      
    });
  };
});
