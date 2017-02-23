angular
.module('Synesthesia')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User.login(vm.user)
    .$promise
    .then((data) => {
      console.log(data);
      // Data not passed through
      CurrentUserService.getUser();
      $state.go('soundsIndex');
    }, () => {
      // Error not passed through
      vm.message= 'Invalid password or user email. Try again';
    });
  };
}
