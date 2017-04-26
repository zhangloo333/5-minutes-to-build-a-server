var express = require('express');

//creat a server
var server = express();

server.use(express.static('public'));
server.listen(3000, function() {
  console.log('express server is hosted on port 3000');
})
