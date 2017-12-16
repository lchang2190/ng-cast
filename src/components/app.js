angular.module('video-player')
.component('app', {
  // TODO
  controller: function() {
    this.videos = window.exampleVideoData;
    this.i = 0;
    var that = this;
    this.clickVideo = function (index) {
      that.i = index;
      console.log(that.i);
    };
  },
  templateUrl: '/src/templates/app.html'   
  
});
