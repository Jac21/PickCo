angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('pickCo', {
    url: '/initial',
    templateUrl: 'templates/pickCo.html',
    controller: 'pickCoCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('copicSketchColorChart', {
    url: '/colorchart',
    templateUrl: 'templates/copicSketchColorChart.html',
    controller: 'copicSketchColorChartCtrl'
  })

  .state('chooseMarkerType', {
    url: '/page6',
    templateUrl: 'templates/chooseMarkerType.html',
    controller: 'chooseMarkerTypeCtrl'
  })

$urlRouterProvider.otherwise('/initial')



});
