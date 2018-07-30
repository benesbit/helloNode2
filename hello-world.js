var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
}).listen(6877);

console.log('Server started on http://flip3.engr.oregonstate.edu:6877; press Ctrl-C to terminate....');
