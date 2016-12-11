var app = angular.module('app', ['ui.router','firebase']);

app.constant('FirebaseUrl', 'https://adherence-pill-bottle.firebaseio.com/');
//ref to firebase service
// var ref = new Firebase('FirebaseUrl')
app.service('ref', ['FirebaseUrl', Firebase])
//register it with main module
app.service('users', Users)


function index(users){
  //this.cur = users.get('kim');
  this.cur = users.all();
  console.log(this.cur);
}

function Users(ref, $firebaseObject, $firebaseArray){
  var users = ref.child('user');

// get specific user by its id
  this.get = function get(id){
    return $firebaseObject(users.child(id));
  }

// get all users, all is just a defined name
  this.all = function all(){
    return $firebaseArray(users);
  }
}





//code smell
//Angular love dependcy injection, it means never to say new
/*
app.controller('indexController', function($scope,  $firebaseObject){
  var ref = new Firebase("https://apb.firebaseio.com");
  console.log(ref);
  var name = ref.child('kim');
  $scope.user = $firebaseObject(name);
  console.log($scope.user);
});
*/
