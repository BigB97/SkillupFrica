var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(201, {'Content-Type':'text/plain'});
    res.end("Hello world, Faith Adeosun is changing the world");
});

server.listen(3050, '127.0.0.1');
console.log('Hy world, we are now listening to port 3050');