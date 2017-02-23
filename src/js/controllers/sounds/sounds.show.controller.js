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

  vm.addColour = function() {
    //getting the colour name from the array which is...
    //...selected in the color picker window.
    vm.colour.name = vm.colour.name.split('#')[1];
    //get the sound id of the sound that is playing
    vm.colour.sound_id = vm.sound.id;
    //get the current users id
    vm.colour.user_id = CurrentUserService.currentUser.id;

    // console.log(vm.colour);
    Colour
    //save the colour which has been selected and then send all...
    //...of this data and pass it through as a string
    .save(vm.colour)
    .$promise
    .then(() => {
      vm.colour.name = '';
    });
  };

}
