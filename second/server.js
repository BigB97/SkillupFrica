let http = require('http');

let server = http.createServer(function(req,res){ 
  res.writeHead(201,{'Content-Type': 'text/plain'});
  res.end('Hello World, Chiamaka Nwankwo is changing the world');
});

server.listen(3050,'127.0.0.1');
console.log('JavaScript is very easy to me, I enjoy coding with JS');