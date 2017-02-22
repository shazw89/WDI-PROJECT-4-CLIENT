angular
  .module('Synesthesia')
  .factory('Colour', colourFactory);

colourFactory.$inject = ['API', '$resource'];
function colourFactory(API, $resource){
  return $resource(`${API}/colours/:id`, {id: '@_id'});
}
