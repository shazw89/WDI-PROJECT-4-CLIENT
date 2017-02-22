angular
.module('Synesthesia')
.controller('SoundsShowCtrl', SoundsShowCtrl);

SoundsShowCtrl.$inject = ['Sound', 'Colour', '$stateParams', 'CurrentUserService'];
function SoundsShowCtrl(Sound, Colour, $stateParams, CurrentUserService){
  const vm     = this;
  vm.sound     = Sound.get({ id: $stateParams.id });

  vm.playSound = function() {
    new Audio(vm.sound.audio).play();
  };

// <<<<<<< HEAD
// get the selected sound

  vm.sound = Sound.get({ id: $stateParams.id });

  vm.playSound = playSound;


  function playSound() {
    new Audio(vm.sound.audio).play()
  }

//   vm.pauseSound = pauseSound;
//
// function pauseSound() {
//   new Audio(vm.sound.audio).pause()
// }




//play the selected sound to the user

//get the selected colour from the user

//play the sound and show the user the colour they selected
// =======
//   vm.addColour = function() {
//     vm.colour.sound_id = vm.sound.id;
//     vm.colour.user_id = CurrentUserService.currentUser.id;
//
//
//     Colour
//       .save(vm.colour)
//       .$promise
//       .then(data => {
//         vm.colour = {};
//         console.log("COLOR SAVED", data);
//       });
//   };
// >>>>>>> b9ca9024bfc85a852bcb689d6342974eaddb210f

}
