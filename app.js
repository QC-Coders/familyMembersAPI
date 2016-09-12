var http = require('http');
http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('Aww yea, we\'re in here!');
  response.end();
}).listen(3000,function() {
  console.log('Server started');
});
