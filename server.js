let http = require('http');

let server = http.createServer(function(req,res){
    res.writeHead(201,{'content-Type': 'text/plain'});
    res.end('Hello world, Onuko Praise is making global impact');
});
server.listen(3050,'127.0.0.1');
console.log('javascript is bae i enjoy coding with js');