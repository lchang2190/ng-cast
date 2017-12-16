angular.module('video-player')

.component('search', {
  bindings: {
    search: '<'
  },

  controller: function() {
    this.input = '';
    console.log(this.input);
  },

  templateUrl: '/src/templates/search.html'
});
