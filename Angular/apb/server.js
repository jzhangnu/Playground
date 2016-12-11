var express = require('express');
var http = require('http');
var appServer = express();

appServer.use(express.static(__dirname));

appServer.listen(8000, function(){
  console.log('app listening on port 8000');
});

appServer.get('*', function(req, res) {
    res.send('./index.html'); // load our public/index.html file
});

exports = module.exports = appServer;
