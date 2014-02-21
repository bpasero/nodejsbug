var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");

var handle = fs.openSync('data/user.db', 'w');
console.log("Opened file: " + handle);