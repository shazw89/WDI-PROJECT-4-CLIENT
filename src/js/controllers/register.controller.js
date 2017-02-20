angular
.module('Synesthesia')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    User
    .register(vm.user)
    .$promise
    .then(() => {
      // data not passed through
      CurrentUserService.getUser();
      $state.go('usersIndex');
    }, err => {
      console.log(err);
    });
  };
}
