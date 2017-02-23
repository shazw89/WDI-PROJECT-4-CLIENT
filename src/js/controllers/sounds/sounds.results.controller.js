angular
.module('Synesthesia')
.controller('SoundsResultsCtrl', SoundsResultsCtrl);

SoundsResultsCtrl.$inject = ['Sound', '$stateParams', '$document'];
function SoundsResultsCtrl(Sound, $stateParams, $document) {
  const vm  = this;

  vm.count = 0;

  Sound
    .get($stateParams)
    .$promise
    .then(data => {
      vm.sound   = data;
      vm.colours = vm.sound.colours.map(function(color) {
        return color.name;
      });

      function change() {
        $document[0].querySelectorAll('.colour-circle')[0].style.backgroundColor = `#${vm.colours[vm.count]}`;
        vm.count++;
        if(vm.count == vm.colours.length) {
         vm.count = 0;
        }
      }

      console.log(vm.colours);

      setInterval(function(){
        change();
      }, 2500);
    });
}
