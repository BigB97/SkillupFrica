//how to create server
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(201, {'content-Type': 'text/plain'});
    res.end('Hello World, Powei Christiana is changing the world');
})

server.listen(3050, '127.0.0.1');
console.log('Hi, am learning nodejs to port 3050');