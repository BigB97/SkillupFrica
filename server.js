var http = require('http');
var name = "Olisaemeke Nwaeme"

var server = http.createServer(function(req, res){
    res.writeHead(201, {'Content-Type': 'text/plain'});
    res.end('Hello world, ' + name + ' is changing the world!');
});

server.listen(3050, '127.0.0.1');
console.log('server is now listening to port 3050');