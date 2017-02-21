angular
  .module('Synesthesia')
  .factory('Sound', soundFactory);

soundFactory.$inject = ['API', '$resource'];
function soundFactory(API, $resource){
  return $resource(`${API}/sounds/:id`, {id: '@_id'});
}
