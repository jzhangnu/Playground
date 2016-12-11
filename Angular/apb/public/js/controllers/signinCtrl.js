app.controller('signinController', Login);

function Login($scope, $state, $rootScope, ref, $firebaseAuth, $firebaseObject){
  console.log('loaded');
  $scope.authObj = $firebaseAuth(ref);
  /*
  $scope.authObj.$onAuth(function(authData){
    //whenever the authData changes,including when we refresh the page and get the first authentication state
    $scope.authData = authData;
    console.log(authData);

  })
  */

  $scope.signIn = function(){
    console.log('clicked');
    $scope.authObj.$authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    })
    .then(function(authData){
      console.log(authData);
      alert('corrected!');
      $state.go('pdash')
    })
    .catch(function(error){
      console.log(error);
    })
  }

  $scope.logout = function(){
    $scope.authObj.$unauth();
  }
}

//check if there is authData, it means the user has just logged in, and go ahead grab their credentials
/*
  $scope.authPbj.$onAuth(function(authData){
    if(authData){

    }else{

  }
  })
  */
