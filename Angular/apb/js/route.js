app.config(routeConfig);
function routeConfig($stateProvider, FirebaseUrl, $urlRouterProvider){

  $stateProvider
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/common/signup.html',
  })

  .state('signin', {
    url: '/signin',
    templateUrl: 'views/common/signin.html',
  })

  .state('pdash', {
    url: '/dash-patient',
    //abstract: true,
    templateUrl: 'views/patient/dash-patient.html',
    resolve: {
      currentAuth: [ "$firebaseAuth", function($firebaseAuth){
        var ref = new Firebase(FirebaseUrl);
        var authObj = $firebaseAuth(ref);
        console.log('loaded');
        return authObj.$requireAuth();
      }]
    }
  })

  .state('tabs.home', {
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'templates/home.html',
        controller: 'HomeTabCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/signin');
}
