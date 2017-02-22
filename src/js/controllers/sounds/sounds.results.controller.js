angular
.module('Synesthesia')
.controller('SoundsResultsCtrl', SoundsResultsCtrl);

SoundsResultsCtrl.$inject = ['Sound', '$stateParams'];
function SoundsResultsCtrl(Sound, $stateParams) {
  const vm  = this;
  vm.sound = Sound.get($stateParams);
  
  console.log(vm.sound);
}
