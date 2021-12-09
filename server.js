var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(201, {'Content-Type': 'text/plain'});
    res.end('Hello World, Ibrahim Kehinde is changing the world');
});

server.listen(3050, '127.0.0.1');
