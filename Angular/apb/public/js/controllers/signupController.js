app.controller('signupController', Login);


function Login($scope, $state, ref, $firebaseAuth, $firebaseObject){
  console.log('loaded');
  console.log(ref);
  var users = ref.child('users');
  $scope.authObj = $firebaseAuth(ref);
  $scope.signUp = function(){
    //check if
    console.log('clicked');
    var newProfile = {
      lastname: $scope.lastname,
      firstname: $scope.firstname,
      address: $scope.address,
      phone: $scope.phone
    };
    //create new user
    $scope.authObj.$createUser({
      email: $scope.email,
      password: $scope.password
    })
    .then(function(authData){
        if(authData){
          console.log(authData);
          alert('successed!');
          users.child(authData.uid).set(newProfile, callback);
          function callback(){
            console.log('profile added');
          }

        }
      }
    )
  };
}

/*
    users.push(newuser, callback);
    function callback(){
      console.log("successed!");
      alert("You have successfully registered!");
      $state.go('pdash');
    }
 */
