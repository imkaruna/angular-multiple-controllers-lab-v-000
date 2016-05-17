function StaffController() {
  var vm = this
  vm.name = 'Staff Name';
  vm.email = 'staff@email.com';
  vm.phone = '5053452345';

}
angular
  .module('app')
  .controller('StaffController', StaffController);
