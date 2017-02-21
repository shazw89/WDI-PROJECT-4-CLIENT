angular
.module('Synesthesia')
.controller('SoundsIndexCtrl', SoundsIndexCtrl);

SoundsIndexCtrl.$inject = ['Sound'];
function SoundsIndexCtrl(Sound) {
  const vm  = this;
  // vm.sounds = Sound.query();
}
