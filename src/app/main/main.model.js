(function () {
  'use strict';

  angular
    .module('levelUpAngular')
    .service('toDoModel', ToDoModel);

  function ToDoModel ($http) {
  	console.log ('Service enabled!')
  	var items = [];

  	

  	this.getAllItems = function () {
  		return $http({
  			method: 'GET',
  			url: 'http://localhost:4001/fruites'
  		});
  	}
  }

})();