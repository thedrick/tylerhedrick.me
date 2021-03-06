var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/resources'));

app.get('/', function(request, response) {
  response.sendfile('./index.html');
});

var port = process.env.PORT || 5222;
app.listen(port, function() {
  console.log("Listening on " + port);
});