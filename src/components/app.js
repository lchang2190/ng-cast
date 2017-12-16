angular.module('video-player')
.component('app', {
  // TODO
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.i = 0;
    var that = this;
    this.clickVideo = function (index) {
      that.i = index;
      console.log(that.i);
    };
    this.update = (data) => {
      this.videos = data;
      console.log(this.videos);
    };
    this.searchClick = function (text) {
      youTube.searchYoutube(text, this.update);
      console.log(text);
      this.input = '';
    };
  },
  templateUrl: '/src/templates/app.html'   
  
});
