/*
app.factory('users', ['$firebase', function($firebase){
  var ref = new Firebase("https://apb.firebaseio.com");
  //write to Firebase
  ref.set('Hey!!! Do you see me?')
  var sync = $firebase(ref);
  console.log(sync);
  var data = sync.name;
  return data;
}]);

//ref.on('value', function(data){
//  console.log(data.val());
//});


//ref.push("");
//Firebase goOnline();
*/
