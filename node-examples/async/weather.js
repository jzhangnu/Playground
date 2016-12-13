var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9736f3e01c30f0a68a35b50a91a0ce5a&q=' + 'Seattle' + '&units=imperial';

module.exports = function (callback){
  console.log('Got weather!');
  request({
    url: url,
    json: true
  }, function(error, response, body){
      if(error){
        callback('Unable to fetch weather');
      }else{
        //console.log(JSON.stringify(body, null, 4));
        callback('It\'s ' + body.main.temp + ' in ' + body.name);
      }
  })

  console.log('After request!');
}
