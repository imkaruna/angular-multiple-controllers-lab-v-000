function ContactController() {
  var vm = this;
  vm.name = 'Old name';
  vm.email = 'contact@email.com';
  vm.phone = '5053452345';
  this.changeName = function () {
    vm.name = 'Something else!';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
