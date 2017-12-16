angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    click: '<',
    currentindex: '<'  
  },

  
  controller: function() {
  },

  templateUrl: '/src/templates/videoListEntry.html'
});
