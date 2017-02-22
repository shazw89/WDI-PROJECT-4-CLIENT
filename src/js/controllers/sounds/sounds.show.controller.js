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
    vm.colour.sound_id = vm.sound.id;
    vm.colour.user_id = CurrentUserService.currentUser.id;


    Colour
      .save(vm.colour)
      .$promise
      .then(data => {
        vm.colour = {};
        console.log("COLOR SAVED", data);
      });
  };

}
