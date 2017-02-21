angular
.module('Synesthesia')
.controller('SoundsIndexCtrl', SoundsIndexCtrl);

SoundsIndexCtrl.$inject = ['Sound', 'CurrentUserService'];
function SoundsIndexCtrl(Sound, CurrentUserService) {
  const vm  = this;
  vm.sounds = Sound.query();
}
