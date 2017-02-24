angular
.module('Synesthesia')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
 const vm = this;

 $rootScope.$on('loggedIn', () => {
   vm.user = CurrentUserService.currentUser;
 });

 vm.logout = () => {
   CurrentUserService.removeUser();
   $state.go('home');
 };

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });

}
