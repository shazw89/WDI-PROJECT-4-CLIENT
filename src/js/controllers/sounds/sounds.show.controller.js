angular
.module('Synesthesia')
.controller('SoundsShowCtrl', SoundsShowCtrl);

SoundsShowCtrl.$inject = ['Sound', '$stateParams'];
function SoundsShowCtrl(Sound, $stateParams){
  const vm = this;


  // get the selected sound

  vm.sound = Sound.get({ id: $stateParams.id });
  vm.playSound = playSound;

  // vm.colour = Colour.get({ id: $stateParams.id });

  function playSound() {
    new Audio(vm.sound.audio).play();
  }


  //get the selected colour from the user
  // function selectColour() {
  //   new Colour();
  // }
}
