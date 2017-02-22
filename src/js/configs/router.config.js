angular
.module('Synesthesia')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('soundsIndex', {
    url: '/sounds',
    templateUrl: '/js/views/sounds/index.html',
    controller: 'SoundsIndexCtrl',
    controllerAs: 'soundsIndex'
  })
  .state('soundsShow', {
    url: '/sounds/:id',
    templateUrl: 'js/views/sounds/show.html',
    controller: 'SoundsShowCtrl',
    controllerAs: 'soundsShow'
  })
  .state('soundsResults', {
    url: '/sounds/:id/results',
    templateUrl: 'js/views/sounds/results.html',
    controller: 'SoundsResultsCtrl',
    controllerAs: 'soundsResults'
  });
  $urlRouterProvider.otherwise('/');
}
