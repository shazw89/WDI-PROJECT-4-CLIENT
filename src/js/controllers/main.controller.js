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
 };

<<<<<<< HEAD
 $rootScope.$on('loggedOut', () => {
   vm.user = null;
 });
=======
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });

>>>>>>> Ali
}
