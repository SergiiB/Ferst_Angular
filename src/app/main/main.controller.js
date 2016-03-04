(function() {
  'use strict';

  angular
    .module('levelUpAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.header = "TOTOLIST";
    vm.btnText = "ADD";
    vm.items = [
      {
        name: "First",
        completed: false,
        id: 0
      },
      {
        name: "Second",
        completed: false,
        id: 1
      },
      ]
    vm.newTodo = "Test todo";
    
    vm.addItem = function (e) {
      var model = null;

      if(e.keyCode === 13 || e.type === "click") {
        model = {
          name: vm.newTodo,
          completed: false,
          id: generateId()
        };
      vm.items.push(model);
      vm.newTodo = null;
      }
    };

    vm.deleteItem = function (e, id) {
      var currentIndex = this.items.indexOf(this.items.filter(function (item) {
            return item.id === parseInt(id);
      })[0]);

      vm.items.splice(currentIndex, 1);
    };

    vm.getCompleted = function (e, id) {
      console.log(id);
        
      var currentIndex = this.items.indexOf(this.items.filter(function (item) {
          return item.id === parseInt(id);
      })[0]);

      this.items[currentIndex].completed = !this.items[currentIndex].completed;
    };

    function generateId () {
        return Math.floor((1 + Math.random()) * 0x10000);
    }

  }
})();
