/*
app.controller('indexController', function($scope,  $firebaseObject){
  var ref = new Firebase("https://apb.firebaseio.com");
  console.log(ref);
  var name = ref.child('Kim');
  $scope.user = $firebaseObject(name);
  console.log($scope.user);
});

  ref.set('Hey!!! Do you see me?');
  $scope.messages = $firebaseObject(ref);
  console.log(message);
  $scope.add = function(messge){
    $scope.messages.$add(message);
  };
*/
