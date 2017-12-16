angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    videos: '<',
    i: '<'
  },

  controller: function () {
    //this.videoId = this.videos[0].id.videoId;
    
  },
  templateUrl: '/src/templates/videoPlayer.html'
});
