angular
.module('Synesthesia')
.controller('ResultsIndexCtrl', ResultsIndexCtrl);


ResultsIndexCtrl.$inject = ['Result'];
function ResultsIndexCtrl(Result) {
  const vm  = this;
  vm.sounds = Result.query();
}
