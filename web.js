var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var index = "index.html";

app.get('/', function(request, response) {

  var output = new Buffer(16);
  output = fs.readFileSync(index, 'utf-8');
  
  response.send(output.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
