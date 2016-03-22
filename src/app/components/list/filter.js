
(function () {
  angular
    .module('levelUpAngular')
    .filter('customFilter', function() {
      return function(item) {
        return item.completed
      }
    })
})();
