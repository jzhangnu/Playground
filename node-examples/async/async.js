
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9736f3e01c30f0a68a35b50a91a0ce5a&q=' + encodedLocation + '&units=imperial';

function printInTwoSeconds(message){
  setTimeout(function(){
    console.log(message);
  }, 2000)
}

printInTwoSeconds('Hello async!');
