angular
.module('Synesthesia')
.controller('SoundsShowCtrl', SoundsShowCtrl);

SoundsShowCtrl.$inject = ['Sound', '$stateParams'];
function SoundsShowCtrl(Sound, $stateParams){
  const vm = this;


// get the selected sound

  vm.sound = Sound.get({ id: $stateParams.id });

  vm.playSound = playSound;

  function playSound() {
    new Audio(vm.sound.audio).play()
  }

//play the selected sound to the user

//get the selected colour from the user

//play the sound and show the user the colour they selected

function ModalShowCtrl(ModalService){
  const vm = this;

  vm.openModal = openModal;
  vm.closeModal = closeModal;

  initModalCtrl();

  function initModalCtrl() {
    vm.bodyText = 'Testing 1, 2, 3';
  }

  function openModal(id){
    ModalService.Open(id);
  }

  function closeModal(id){
    ModalService.Close(id);
  }
  // Click button to pick colour.

  // Modal pops up, containing colour picker.

  // User picks colour.


  // User clicks submit, colour is pushed to sound’s show page.


}

}
