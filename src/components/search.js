angular.module('video-player')

.component('search', {
  bindings: {
    search: '<',
    update: '<'
  },

  controller: function() {
    this.input = '';
    console.log(this.input);
  },

  templateUrl: '/src/templates/search.html'
});
